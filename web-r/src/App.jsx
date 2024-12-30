import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar";
import Home from './webpages/Home.jsx';
import Bottombar from './components/bottombar.jsx';
import './App.scss';

function App() {
  return (
    <Router basename='/'>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  
      <Bottombar />
    </Router>
  )
}
  
export default App;
