import { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { fontSans } from "@/lib/fonts"
import { setMainNav, useAppDispatch } from "@/store/store";
import { RootLayout } from "@/components/app/layout";
import { AppCacheProvider, useAppCache, OptionsProvider } from "@/hooks";

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
    <BrowserRouter basename="/">
      {/* <Title title="Warcraft III Data Viewer"> */}
        <OptionsProvider>
          <AppCacheProvider beginMapLoad={beginMapLoad} onMapProgress={onMapProgress} finishMapLoad={finishMapLoad} failMapLoad={failMapLoad}>
            {/* <div className="App">
              <MapDialog name={mapLoadName} status={mapLoadStatus} progress={mapLoadProgress} error={mapLoadError} onHide={this.onCloseMapDialog}/>
              <Routes>
                <Route path="/:build?" element={<AppLoader/>}/>
              </Routes>
            </div> */}
            <main className={cn(
              "flex flex-col min-h-screen bg-background font-sans antialiased gap-1 bg-blue-app",
              // min-h-full p-3 gap-1 flex flex-col
              // fontSans.variable
            )}>
              <Routes>
                <Route path="/:build?" element={<RootLayout/>}/>
              </Routes>
            </main>
          </AppCacheProvider>
        </OptionsProvider>
      {/* </Title> */}
    </BrowserRouter>
  )
}

export default App