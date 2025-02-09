import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useData } from "@/hooks";
// import Title from './data/title';
// import AppCache from './data/cache';

// import { ObjectView } from '@/components/app/objects/ObjectView';
// import { FileView } from '@/components/app/files/FileView';
import { MapHome, objectTypes } from "@/components/app";
// import JassView from '@/components/app/jass/JassView';
// import MapView from '@/components/app/MapView';

const DataView = () => {
  const data = useData();
  console.log(data);
  if (!data)
    return <></>;

  let views = (
    <Routes>
      {/* <Route path={`/:build/(${Object.keys(objectTypes).join("|")})`} element={<ObjectView/>}/> */}
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
