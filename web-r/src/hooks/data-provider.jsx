import React, { createContext, use, useEffect, useState } from "react";
import IdbKvStore from "idb-kv-store";
import { BaseData, Cache, fileId } from "@/hooks/useCache";
import { makeUid, pathHash } from "@/utils/hash";
import { notifyMessage } from "@/utils/notify";
import loadArchive from "@/components/maps/archive";
import { AppCacheProviderContext, MapsProviderContext } from "@/hooks";

export const AppCacheProvider = ({ children, beginMapLoad, onMapProgress, finishMapLoad, failMapLoad, ...props }) => {
  const [cache] = useState(new Cache());
  const [dataStore, setDataStore] = useState(null);
  const [nameStore, setNameStore] = useState(null);
  const [icons, setIcons] = useState(new Map());
  const [versions, setVersions] = useState({});
  const [maps, setMaps] = useState({});
  const [custom, setCustom] = useState({});
  const [customDesc, setCustomDesc] = useState({});
  const [baseData, setBaseData] = useState({});
  const [mapData, setMapData] = useState({});
  const [meta, setMeta] = useState(null);
  const [parser, setParser] = useState(null);

  const readFile = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.onabort = () => reject();
    reader.readAsArrayBuffer(file);
  });

  useEffect(() => {
    let mapData = null , mapNames = null;
    try {
      mapData = new IdbKvStore("mapData");
      mapNames = new IdbKvStore("mapNames");
    } catch (e) {
      console.error(e)
    }
    setDataStore(mapData);
    setNameStore(mapNames);

    const proms = [
      cache.fetch("/api/images.dat", { type: "binary" }),
      cache.fetch("/api/versions.json"),
    ];
    if (mapNames) {
      proms.push(mapNames.json());
    }
    Promise.all(proms).then(([images, versions, names]) => {
      const imageList = new Uint32Array(images);
      const newIcons = new Map();
      for (let i = 0; i < imageList.length; i += 2) {
        const uid = makeUid(imageList.subarray(i, i + 2));
        newIcons.set(uid, (i / 2) + 1000 * 256);
      }
      setIcons(newIcons);
      setVersions(versions.versions);

      if (names) {
        setMaps(names);
      }

      const newCustom = {};
      const newCustomDesc = {};
      if (versions.custom) {
        Object.entries(versions.custom).forEach(([id, info]) => {
          newCustom[id] = info.data;
          newCustomDesc[id] = info.desc;
        });
      }
      setCustom(newCustom);
      setCustomDesc(newCustomDesc);
    });
  }, []);

  const metaRaw = () => cache.fetch("/api/meta.gzx", { type: "binary", global: true });

  const fetchMeta = () => {
    if (meta) {
      return meta;
    }
    return metaRaw().then(data => loadArchive(data)).then(setMeta);
  };

  const isLocal = build => !!(maps[build] && !custom[build]);

  const fetchData = build => {
    if (maps[build]) {
      if (mapData[build]) {
        return mapData[build];
      }
      if (custom && custom[build]) {
        return cache.fetch(`/api/${custom[build]}`, { type: "binary", global: true })
          .then(data => loadArchive(data))
          .then(arc => {
            const newMapData = { ...mapData, [build]: new MapData(cache, arc, build, maps[build]) };
            setMapData(newMapData);
            return newMapData[build];
          });
      } else {
        return dataStore.get(build)
          .then(blob => readFile(blob))
          .then(data => loadArchive(data))
          .then(arc => {
            const newMapData = { ...mapData, [build]: new MapData(cache, arc, build, maps[build]) };
            setMapData(newMapData);
            return newMapData[build];
          })
          .catch(err => Promise.reject(notifyMessage(err.toString(), "danger")));
      }
    } else if (versions[build]) {
      if (baseData[build]) {
        return baseData[build];
      }
      const newBaseData = { ...baseData, [build]: new BaseData(cache, build, versions[build]) };
      setBaseData(newBaseData);
      return newBaseData[build];
    }
    return null;
  };

  const hasData = build => !!(maps[build] || versions[build]);

  const fetchIcon = id => {
    const index = icons.get(makeUid(id));
    if (index) {
      const col = index % 16;
      const row = ((index / 16) | 0) % 16;
      const image = (index / 256) | 0;
      return {
        backgroundImage: `url(/api/icons${image}.png)`,
        backgroundPosition: `-${col * 16}px -${row * 16}px`,
      };
    } else {
      return null;
    }
  };

  const fetchIconByName = name => fetchIcon(pathHash(name));

  const fetchImage = (name, tileset) => {
    let id = fileId(name, true);
    const uid = makeUid(id);
    let path = `/api/images/${uid}`;
    if (tileset) {
      path += `?tileset=${tileset}`;
    }
    return path;
  };

  const fetchBinary = (name, tileset) => {
    let id = fileId(name, true);
    const uid = makeUid(id);
    let path = `/api/files/${uid}`;
    if (tileset) {
      path += `?tileset=${tileset}`;
    }
    return path;
  };

  const loadMap = file => {
    abortMap();
    const meta = metaRaw();
    readFile(file).then(map => {
      const newParser = new MapParser();
      newParser.onProgress = stage => onMapProgress(stage);
      beginMapLoad(file.name);
      newParser.parse(meta, map)
        .then(data => {
          setParser(null);

          let nid = 1;
          while (Object.prototype.hasOwnProperty.call(maps, `map${nid}`)) {
            nid += 1;
          }

          let sid = `map${nid}`;

          if (dataStore) {
            Promise.all([
              nameStore.set(sid, file.name),
              dataStore.set(sid, new Blob([data], { type: "application/octet-stream" }))
            ]).catch(() => {
              nameStore.remove(sid);
              dataStore.remove(sid);
            });
          }

          const newMaps = { ...maps, [sid]: file.name };
          setMaps(newMaps);
          const newMapData = { ...mapData, [sid]: loadArchive(data).then(arc => new MapData(cache, arc, sid, file.name)) };
          setMapData(newMapData);

          finishMapLoad(sid);
        })
        .catch(err => {
          setParser(null);

          failMapLoad(typeof err === "string" ? err : false);
          console.error(err);
        });
    });
  };

  const abortMap = () => {
    if (parser) {
      parser.terminate();
      setParser(null);
    }
  };

  const unloadMap = id => {
    if (maps[id]) {
      if (window.confirm(`Are you sure you want to unload ${maps[id]}?`)) {
        const newMaps = { ...maps };
        delete newMaps[id];
        setMaps(newMaps);
        const newMapData = { ...mapData };
        delete newMapData[id];
        setMapData(newMapData);
        if (dataStore) {
          dataStore.remove(id);
          nameStore.remove(id);
        }
        //forceUpdate();
      }
    }
  };

  const value = {
    versions, custom, customDesc, 
    abortMap, isLocal, loadMap, unloadMap,
    fetchMeta, fetchData, hasData, fetchIconByName, fetchImage, fetchBinary
  };
  return (
    <AppCacheProviderContext value={value}>
      <MapsProviderContext value={maps} {...props}>
        {children}
      </MapsProviderContext>
    </AppCacheProviderContext>
  );
};