import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { Card, CardContent, Container, Label } from "@/components/ui";
import { useAppCache, useMapsContext } from "@/hooks/use-cache";

const Home = (props) => {
  const { custom, customDesc } = useAppCache();
  const {maps} = useMapsContext();

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("info");

  return (
    <Container className="block flex-1 p-3 shadow-none">
      {message != null && (
        <Card bsStyle={messageType}>
          <CardContent>{message}</CardContent>
        </Card>
      )}
      <Label className="text-lg">Warcraft III Data</Label>

      <PatchList/>
      
      <MapList name="Standard Maps" items={maps || {}} paths={custom || {}} descs={customDesc || {}}/>
      
      <Label className="text-lg">Custom Maps</Label>
    </Container>
  )
}

const PatchList = () => {
  const { versions } = useAppCache();
  if (Object.keys(versions).length === 0)
    return;
  
  return (
    <ul>
      {Object.entries(versions).sort((a, b) => parseInt(b[0], 10) - parseInt(a[0], 10)).map(([id, name]) => (
        <li key={id}><Label className="mx-3">-</Label><Link to={`/${id}`}>Patch {name}</Link></li>
      ))}
    </ul>
  )
}

const MapLink = ({id, name, desc}) => {
  name = name && name.replace(/\|(c[0-9a-fA-F]{6,8}|r)/g, "");
  desc = desc && desc.replace(/\|(c[0-9a-fA-F]{6,8}|r)/g, "");
  if (desc) {
    return <Link to={`/${id}`}>{name} <span className="desc">{desc}</span></Link>;
  } else {
    return <Link to={`/${id}`}>{name}</Link>;
  }
};

const MapList = ({ level = 0, name, items, paths, descs, Comp = "div" }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const subLists = {};
  const freeItems = [];

  Object.keys(items).forEach(id => {
    let path = paths[id];
    if (!path || path.indexOf("maps/") !== 0) {
      return;
    }
    path = path.substr(5).split("~");
    if (path.length > level + 1) {
      subLists[path[level]] = (subLists[path[level]] || {});
      subLists[path[level]][id] = items[id];
    } else {
      freeItems.push(id);
    }
  });

  freeItems.sort((a, b) => items[a].localeCompare(items[b]));

  return (
    <Comp className={collapsed ? "collapsed map-list" : "map-list"}>
      <Label className="text-lg flex items-center" onClick={toggle}>
        {collapsed 
          ? <ChevronRightIcon className="w-5 h-5"/> 
          : <ChevronDownIcon className="w-5 h-5"/>}
        {name}
      </Label>
      <ul>
        {Object.keys(subLists).sort().map(sub => (
          <MapList Comp="li" key={sub} level={level + 1} name={sub} items={subLists[sub]} paths={paths} descs={descs} />
        ))}
        {freeItems.map(id => (
          <li key={id}>
            <MapLink id={id} name={items[id]} desc={paths[id].match(/campaign/i) ? descs[id] : null} />
          </li>
        ))}
      </ul>
    </Comp>
  );
};


export { Home }

