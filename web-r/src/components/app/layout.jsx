import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams, Outlet } from 'react-router-dom';
import { MainHeader } from "@/components/main-header";
import { Container } from "@/components/ui";
import { Home } from "@/components/app";
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
        {build ? <Outlet/> : <Home/>}
      </DataProviderContext>
      {/* <EditorComponent/> */}
    </Container>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};