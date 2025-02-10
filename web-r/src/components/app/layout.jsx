import { useState, useRef, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";
// import { setBuild } from "@/store/store";
// import { fontSans } from "@/lib/fonts"
import { MainHeader } from "@/components/main-header";
import { DataView } from "@/components/data-view";
import { Container } from "@/components/ui";
import { Home, EditorComponent, MapHome } from "@/components/app";

import { DataProviderContext, useAppCache } from "@/hooks";

export function RootLayout() {
  const { build } = useParams();
  const { data, maps } = useAppCache();

  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    if (!build){
      setMapData(null);
      return;
    }
    setMapData(data(build));
  }, [build, maps]);

  return (
    <Container className="flex-col flex-1 p-0">
      <DataProviderContext value={mapData}>
        <MainHeader/>
        {build ? 
            <DataView/>
            : <Home></Home>
          }
      </DataProviderContext>
      {/* <EditorComponent/> */}
    </Container>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};