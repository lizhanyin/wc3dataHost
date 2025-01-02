import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppData from '../../data/cache';
import { setNotifyComponent } from '../../utils/notify';

const Page = () => {
    const cache = useContext(AppData.Context);

    //const [state, setState] = useState({message: null, messageType: "info"});

    const parseFile = e => {
      const files = e.target.files;
      if (files.length > 0) {
        cache.loadMap(files[0]);
      }
    }

    useEffect(() => {

      const handleResize = () => {
        console.log('Window resized');
      };
  
      // Add initialization logic here
      window.addEventListener('resize', handleResize);
  
      // Cleanup logic for unmounting
      return () => {
        console.log('Component will unmount');
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div className="HomePage">
          <h4>Warcraft III Data</h4>
          {/* {this.state.message != null && (
            <Panel bsStyle={this.state.messageType}>
              <Panel.Heading><Panel.Title>{this.state.message}</Panel.Title></Panel.Heading>
            </Panel>
          )}
          <h4>Warcraft III Data</h4>
          <ul>
            {Object.entries(cache.versions).sort((a, b) => parseInt(b[0], 10) - parseInt(a[0], 10)).map(([id, name]) => (
              <li key={id}><Link to={`/${id}`}>Patch {name}</Link></li>
            ))}
          </ul>
          <AppCache.MapsContext.Consumer>
            {maps => (
              <MapList name="Standard Maps" items={maps} paths={cache.custom || {}} descs={cache.customDesc || {}}/>
            )}
          </AppCache.MapsContext.Consumer>
          <h4>Custom Maps</h4>
          <AppCache.MapsContext.Consumer>
            {maps => (
              <ul>
                {Object.entries(maps).filter(([id]) => !cache.custom[id] || !cache.custom[id].match(/^maps\//))
                       .sort((a, b) => a[1].localeCompare(a[2])).map(([id, name]) => {
                  let unload = null;
                  if (cache.isLocal(id)) {
                    unload = <span className="unload" onClick={() => cache.unloadMap(id)}>(unload)</span>;
                  }
                  return <li key={id}><Link to={`/${id}`}>{name}</Link>{unload}</li>;
                })}
              </ul>
            )}
          </AppCache.MapsContext.Consumer>
          <form>
            <FormGroup controlId="loadFile">
              <ControlLabel className="linkLike">Load a custom Warcraft III map</ControlLabel>
              <FormControl style={{display: "none"}} type="file" onChange={this.parseFile} accept=".w3x,.w3m,.mpq" multiple={false} value=""/>
              <HelpBlock>
                <p>Or simply drop the map file onto the page</p>
                <p>The map will be parsed in your browser, and the data will be stored in browser cache. Nothing is sent to the server.</p>
              </HelpBlock>
            </FormGroup>
          </form> */}
        </div>
      );
};

export default Page;