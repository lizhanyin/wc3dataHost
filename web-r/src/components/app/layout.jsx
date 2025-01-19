import { useState, useRef, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";
// import { setBuild } from "@/store/store";
// import { fontSans } from "@/lib/fonts"
import { MainHeader } from "@/components/main-header";
import { Container } from "@/components/ui";
import { Home, EditorComponent } from "@/components/app";
import { DataProviderContext, useAppCache } from "@/hooks";

export function RootLayout() {
  const { build } = useParams();
  const { fetchData } = useAppCache();

  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    if (!build){
      setMapData(null);
      return;
    }
    setMapData(fetchData(build));
  }, [build]);

  return (
    <Container className="flex-col flex-1 p-0">
      <MainHeader build={build}/>
      {build ? 
        <DataProviderContext value={mapData}>
          
        </DataProviderContext>

        : <Home></Home>
      }
      {/* <EditorComponent/> */}
    </Container>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};