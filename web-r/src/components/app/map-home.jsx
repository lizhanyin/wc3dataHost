import React from 'react';
import AppCache from './data/cache';
import tagString from './data/tagString';

const MapHome = ({ data, info, image }) => {
  const tagString = (str) => {
    // 假设 tagString 是一个函数，在这里定义它
    return str;
  };

  return (
    <div>
      <h4>{data.core ? "Warcraft III Patch " : ""}{data.name}</h4>
      {info != null && (
        <ul className="mapInfo">
          <li><b>Name:</b> <span>{tagString(info.name)}</span></li>
          <li><b>Suggested Players:</b> <span>{tagString(info.players)}</span></li>
          <li><b>Description:</b> <span>{tagString(info.description)}</span></li>
          <li><b>Author:</b> <span>{tagString(info.author)}</span></li>
        </ul>
      )}
      {image != null && <img src={image} alt="Map preview"/>}
    </div>
  );
};

export default MapHome;