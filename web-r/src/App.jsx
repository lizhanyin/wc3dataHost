import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Title from './data/title';
import Options from './data/options';
import AppData from './data/cache';
import Navbar from "./components/navbar";
import MapDialog from "./components/mapdialog";
import { withRouter } from './utils/withRouter';
import Home from './webpages/Home';
import './App.scss';

function App() {
  const [mapLoadName, setMapLoadName] = useState(""); 
  const [mapLoadProgress, setMapLoadProgress] = useState(-1);
  const [mapLoadStatus, setMapLoadStatus] = useState(-1);
  const [mapLoadError, setMapLoadError] = useState(null);

  useEffect(() => {
    if (mapLoadError) {
      setMapLoadStatus(0);
    }
  }, [mapLoadError]);

  const beginMapLoad = (name) => {
    setMapLoadName(name);
    setMapLoadProgress(-1);
    setMapLoadStatus(-1);
    setMapLoadError(null);
  }

  const onMapProgress = (progress) => {
    setMapLoadProgress(progress);
  }
  
  const finishMapLoad = (id) => {
    setMapLoadStatus(id);
  }

  const failMapLoad = (error) => {
    setMapLoadStatus(-1); // 
    setMapLoadError(error);
  }

  const cache = new AppData({
    beginMapLoad,
    onMapProgress,
    finishMapLoad,
    failMapLoad
  });

  const onCloseMapDialog = () => {
  }

  const HomeWithRouter = withRouter(Home);
  return (
    <Router basename='/'>
      <Title title="WC3 Data Viewer">
        <Options>
          <AppData.Context.Provider value={cache}>
            <AppData.MapsContext.Provider value={cache.maps}>
              <div className="App">
                <Navbar />
                <Routes>
                  <Route path="/:build?" element={<HomeWithRouter/>} />
                </Routes>
                <MapDialog name={mapLoadName} status={mapLoadStatus} progress={mapLoadProgress} error={mapLoadError} onHide={onCloseMapDialog}/>
              </div>
            </AppData.MapsContext.Provider>
          </AppData.Context.Provider>
        </Options>
      </Title>
      {/* <Bottombar /> */}
    </Router>
  )
}
  
export default App;
