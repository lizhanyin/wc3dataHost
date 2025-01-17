import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { fontSans } from "@/lib/fonts"
import { setMainNav, useAppDispatch } from "@/store/store";
import { RootLayout } from "@/components/app/layout";
import { AppCacheProvider } from "@/hooks/use-cache";

import { cn } from "@/lib/utils"

function App() {

  const dispatch = useAppDispatch();
  dispatch(setMainNav([]))
  return (
    <BrowserRouter basename="/">
      {/* <Title title="Warcraft III Data Viewer"> */}
        {/* <Options> */}
          <AppCacheProvider>
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
        {/* </Options> */}
      {/* </Title> */}
    </BrowserRouter>
  )
}

export default App