import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dioceses from './components/Dioceses'
import Icons from './components/Icons';
import Podcasts from './components/Podcasts';
import Ecf from './components/Ecf';
import AgpeyaPage from './components/Agpeya'
// import DesertFathersPage from './components/DFathers'
import SermonPage from './components/Sermons';
import SynaxariumPage from './components/SynaxariumPage';
//import Hymns from './components/Hymns'; 
// TODO: Import other components as needed

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/icons" element={<Icons />} /> 
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/podcasts" element={<Podcasts />} />  
          <Route path="/ecf" element={<Ecf />} />        
          <Route path="/agpeya" element={<AgpeyaPage />} />        
          <Route path="/dioceses" element={<Dioceses />} />
          {/* <Route path="/desertfathers" element={<DesertFathersPage />} /> */}
          <Route path="/sermons" element={<SermonPage />} />
          <Route path="/Synaxarium" element={<SynaxariumPage />} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          {/* <Route path="/contact" element={<Contact />} />     */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
