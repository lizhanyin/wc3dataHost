import React, { use } from 'react';
import { useData } from "@/hooks";
import tagString from '@/components/common/tag-string';
import { Container, Label } from "@/components/ui";

const MapHome = ({}) => {
  const data = useData();
  if (!data)
    return <></>;
  
  let info = data.file("info.json");
  info = info ? JSON.parse(info) : null;
  
  let image = null;
  if (data.archive) {
    image = data.archive.loadImage("war3mapPreview.tga") || data.archive.loadImage("war3mapMap.blp");
  }

  return (
    <Container className="flex flex-col flex-1 gap-2 p-4">
      <Label className="text-lg">
        {data.core ? "Warcraft III Patch " : ""}<span className='text-sky-11 dark:text-sky-11'>{data.name}</span>
      </Label>
      <div className="bg-blacka-10 w-120 rounded-lg">
        {info != null && (
            <ul className="mapInfo">
              <li><b className="text-[#ffcc00]">Name:</b> <span>{tagString(info.name)}</span></li>
              <li><b className="text-[#ffcc00]">Suggested Players:</b> <span>{tagString(info.players)}</span></li>
              <li><b className="text-[#ffcc00]">Description:</b> <span>{tagString(info.description)}</span></li>
              <li><b className="text-[#ffcc00]">Author:</b> <span>{tagString(info.author)}</span></li>
            </ul>
        )}
        {image != null && <img src={image} alt="Map preview"/>}
      </div>
    </Container>
  );
};

export { MapHome };