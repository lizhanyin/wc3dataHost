import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useData } from "@/hooks";

import { ObjectView } from '@/components/app/objects/ObjectView';
// import { FileView } from '@/components/app/files/FileView';
import { MapHome, objectTypes } from "@/components/app";
// import JassView from '@/components/app/jass/JassView';
// import MapView from '@/components/app/MapView';

const DataView = () => {
  const data = useData();
  if (!data)
    return <></>;

  const params = useParams();

  let views = (
    <Routes>
      <Route path="/:build">
        {Object.keys(objectTypes).map(t => (
          <Route key={t} path={`:type(${t})?`}>
            <Route path={`:id?`} element={<ObjectView build={params.build} type={t}/>} />
          </Route>
        ))}
      </Route>
      {/* <Route path="/:build/script" element={<JassView/>}/> */}
      {/* <Route path="/:build/map" element={<MapView/>}/> */}
      {/* <Route path="/:build/files" element={<FileView/>}/> */}
      
      <Route path="/:build?" element={<MapHome/>}/>
    </Routes>
  );

  if (data.isMap) {
    data.name
  } 

  return views;
}

export { DataView };
