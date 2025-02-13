import { useState, useRef } from "react";
import { Outlet } from 'react-router-dom';
import { GlobalProvider, AppCacheProvider, OptionsProvider, useGlobal, useAppCache } from "@/hooks";

import { cn } from "@/lib/utils"

function App() {

  const { abortMap } = useAppCache();
  const [mapLoadName, setMapLoadName] = useState(null);
  const [mapLoadProgress, setMapLoadProgress] = useState(-1);
  const [mapLoadStatus, setMapLoadStatus] = useState(null);
  const [mapLoadError, setMapLoadError] = useState(null);
  const routerRef = useRef(null);

  const navigateTo = (url) => {
    if (routerRef.current) {
      routerRef.current.history.push(url);
    }
  };

  const beginMapLoad = (name) => {
    setMapLoadName(name);
    setMapLoadProgress(-1);
    setMapLoadStatus(null);
    setMapLoadError(null);
  };

  const onMapProgress = (stage) => {
    setMapLoadProgress(stage);
  };

  const finishMapLoad = (id) => {
    setMapLoadStatus(id);
  };

  const failMapLoad = (error) => {
    setMapLoadStatus(false);
    setMapLoadError(error);
  };

  const onCloseMapDialog = () => {
    abortMap();
    setMapLoadName(null);
    setMapLoadProgress(-1);
    setMapLoadStatus(null);
    setMapLoadError(null);
  };

  return (
    <>
      <GlobalProvider>
        <OptionsProvider>
          <AppCacheProvider beginMapLoad={beginMapLoad} onMapProgress={onMapProgress} finishMapLoad={finishMapLoad} failMapLoad={failMapLoad}>
            <main className={cn(
              "flex flex-col min-h-screen bg-background font-sans antialiased gap-1",
              // min-h-full p-3 gap-1 flex flex-col
              // fontSans.variable
            )}>
              <Outlet />
            </main>
          </AppCacheProvider>
        </OptionsProvider>
      </GlobalProvider>
    </>
  )
}

export default App