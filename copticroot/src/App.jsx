import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dioceses from './components/Dioceses'
import Icons from './components/Icons'; 
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
          {/* <Route path="/hymns" element={<Hymns />} />        */}
          <Route path="/dioceses" element={<Dioceses />} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          {/* <Route path="/contact" element={<Contact />} />     */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
