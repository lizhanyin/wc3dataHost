import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams, Outlet } from 'react-router-dom';
import { DataProviderContext, useAppCache } from "@/hooks";
import { MainHeader } from "@/components/main-header";
import { Container } from "@/components/ui";
import { Home } from "@/components/app";
import { cn } from "@/lib/utils"

export function RootLayout() {
  const { build } = useParams();
  const { data, maps } = useAppCache();

  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const p = data(build);
    if (!p){
      setMapData(null);
      return;
    }

    (async () => await p.then(result => setMapData(result)))();
  }, [build, maps]);

  if (build && !mapData) 
    return <></>;

  return (
    <DataProviderContext value={mapData}>
      <main className={cn(
        "flex flex-col min-h-screen bg-background font-sans antialiased gap-1",
        // min-h-full p-3 gap-1 flex flex-col
        // fontSans.variable
      )}>
        <Container className="flex-col flex-1 p-0">
            <MainHeader/>
            {build ? <Outlet/> : <Home/>}
          {/* <EditorComponent/> */}
        </Container>
      </main>
    </DataProviderContext>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};