import { Routes, Route } from 'react-router-dom';
import Title from './data/title';
import AppCache from './data/cache';

import { ObjectView } from './objects/ObjectView';
import { FileView } from './files/FileView';
import MapHome from './MapHome';
import objectTypes from './objects/types';
import JassView from './jass/JassView';
import MapView from './MapView';

const DataView = () => (
  <AppCache.DataContext.Consumer>
    {data => {
      let views = (
        <Routes>
          <Route path={`/:build/(${Object.keys(objectTypes).join('|')})`} Component={ObjectView}/>
          <Route path="/:build/script" element={<JassView/>}/>
          <Route path="/:build/map" element={<MapView/>}/>
          <Route path="/:build/files" element={<FileView/>}/>
          <Route path="/:build" element={<MapHome/>}/>
        </Routes>
      );
      if (data.isMap) {
        return (
          <Title title={data.name}>
            {views}
          </Title>
        )
      } else {
        return views;
      }
    }}
  </AppCache.DataContext.Consumer>
);

export default DataView;
