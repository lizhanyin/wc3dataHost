import { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Card, FormGroup, FormControl, FormLabel, FormText } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import AppData from '../data/cache';

import PropTypes from 'prop-types';
import { notifyMessage } from '../utils/notify'; // Adjust the import path as necessary

import "./Home.scss"


const Home = (props) => {
  // const [data, setData] = useState(null);

  const build = props.build;
  const context = useContext(AppData.Context);
  const [versions, setVersions] = useState({});
  const [custom, setCustom] = useState({});
  const [customDesc, setCustomDesc] = useState({});

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("info");

  useEffect(() => {
    context.ready.then(() => {
      console.log('versions: ', context.versions);
      setVersions(context.versions);
      setCustom(context.custom);
      setCustomDesc(context.customDesc);
    }, error => {
      notifyMessage(`Error loading data: ${error}`, "error");
    });    

    return () => {
      // cleanup
    }
  }, [context]);

  if (build && !context.hasData(build)) {
    notifyMessage(`No data for ${build}`, "warning");
    return <Navigate to="/"/>;
  }

  const parseFile = e => {
    const files = e.target.files;
    if (files.length > 0) {
      context.loadMap(files[0]);
    }
  }

  return (
    <>
      <div className="HomePage">
        {message != null && (
          <Card bsStyle={messageType}>
            <Card.Body><Card.Title>{message}</Card.Title></Card.Body>
          </Card>
        )}
        <h4>Warcraft III Data</h4>
        <ul>
          {Object.entries(versions).sort((a, b) => parseInt(b[0], 10) - parseInt(a[0], 10)).map(([id, name]) => (
            <li key={id}><Link to={`/${id}`}>Patch {name}</Link></li>
          ))}
        </ul>
         
        <AppData.MapsContext.Consumer>
          {maps => (
            <MapList name="Standard Maps" items={maps} paths={custom || {}} descs={customDesc || {}}/>
          )}
        </AppData.MapsContext.Consumer>
        
        <h4>Custom Maps</h4>
        <AppData.MapsContext.Consumer>
          {maps => (
            <ul>
              {Object.entries(maps).filter(([id]) => !custom[id] || !custom[id].match(/^maps\//))
                     .sort((a) => a[1].localeCompare(a[2])).map(([id, name]) => {
                let unload = null;
                if (context.isLocal(id)) {
                  unload = <span className="unload" onClick={() => context.unloadMap(id)}>(unload)</span>;
                }
                return <li key={id}><Link to={`/${id}`}>{name}</Link>{unload}</li>;
              })}
            </ul>
          )}
        </AppData.MapsContext.Consumer>

        <form>
          <FormGroup controlId="loadFile">
            <FormLabel className="linkLike">Load a custom Warcraft III map</FormLabel>
            <FormControl style={{display: "none"}} type="file" onChange={parseFile} accept=".w3x,.w3m,.mpq" multiple={false} value=""/>
            <FormText>
              <p>Or simply drop the map file onto the page</p>
              <p>The map will be parsed in your browser, and the data will be stored in browser cache. Nothing is sent to the server.</p>
            </FormText>
          </FormGroup>
        </form>
      </div>
    </>
  );
};
  
Home.propTypes = {
  build: PropTypes.string,
};

const MapLink = ({id, name, desc}) => {
  name = name && name.replace(/\|(c[0-9a-fA-F]{6,8}|r)/g, "");
  desc = desc && desc.replace(/\|(c[0-9a-fA-F]{6,8}|r)/g, "");
  if (desc) {
    return <Link to={`/${id}`}>{name} <span className="desc">{desc}</span></Link>;
  } else {
    return <Link to={`/${id}`}>{name}</Link>;
  }
};

MapLink.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  desc: PropTypes.string,
};

// class MapList extends React.Component {
const MapList = ({ level = 0, name, items, paths, descs, Comp = "div" }) => {

  const [collapsed, setCollapsed] = useState(true);
  
  const toggle = () => {
    setCollapsed(collapsed);
  }

  const Header = (level ? "h5" : "h4");
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
      <Header onClick={toggle}>
        {collapsed ? <FontAwesomeIcon icon={faChevronRight} /> : <FontAwesomeIcon icon={faChevronDown} />}
        {name}
      </Header>
      <ul>
        {Object.keys(subLists).sort().map(sub => <MapList Comp="li" key={sub} level={level+1} name={sub} items={subLists[sub]} paths={paths} descs={descs}/>)}
        {freeItems.map(id => <li key={id}><MapLink id={id} name={items[id]} desc={paths[id].match(/campaign/i) ? descs[id] : null}/></li>)}
      </ul>
    </Comp>
  );
  
}

MapList.propTypes = {
  level: PropTypes.number,
  name: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
  paths: PropTypes.object.isRequired,
  descs: PropTypes.object.isRequired,
  Comp: PropTypes.elementType,
};

export default Home