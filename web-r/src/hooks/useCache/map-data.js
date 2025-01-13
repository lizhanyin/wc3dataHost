import {pathHash, postProcess} from "@/utils/hash";
import { fileId } from "./utils";

class MapData {
  files_ = {};
  images_ = {};

  constructor(cache, archive, id, name) {
    this.cache = cache;
    this.archive = archive;
    this.id = id;
    this.name = name.replace(/\|(c[0-9a-fA-F]{6,8}|r)/g, '');
    this.isMap = true;
  }

  objects() {
    if (this.objects_) {
      return this.objects_;
    }
    const text = this.archive.loadFile('objects.json');
    if (!text) {
      const version = Math.max(...Object.keys(this.cache.versions));
      const data = this.cache.data(version);
      return this.objects_ = (data ? data.then(v => v.objects()) : Promise.resolve(null));
    }
    return this.objects_ = Promise.resolve(text ? postProcess(JSON.parse(text)) : null);
  }

  listFile() {
    return this.file('listfile.txt');
  }

  hasFile(name) {
    return this.archive.hasFile(fileId(name));
  }

  file(name) {
    if (Object.prototype.hasOwnProperty.call(this.files_, name)) {
      return this.files_[name];
    }
    return this.files_[name] = this.archive.loadFile(name);
  }
  binary(name) {
    return this.archive.loadBinary(name);
  }

  jass(options) {
    return this.archive.loadJASS(options);
  }

  image(name, tileset) {
    return this.archive.loadImage(name) || this.cache.image(name, tileset);
  }

  icon(id) {
    const image = this.archive.loadImage(id);
    if (image) {
      return {
        backgroundImage: `url(${image})`,
        backgroundSize: '100%',
      };
    } else {
      return this.cache.icon(id);
    }
  }

  iconByName(name) {
    return this.icon(pathHash(name));
  }
}

export { MapData };