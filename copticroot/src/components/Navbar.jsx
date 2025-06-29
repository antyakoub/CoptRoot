import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import '../styles/Navbar.css';
import logo from '../assets/jesusFishcross.png'; 

function Navbar() {
  const [mediaOpen, setMediaOpen] = useState(false);
  const [literatureOpen, setLiteratureOpen] = useState(false);

  const location = useLocation(); // Get the current location
  const isHomePage = location.pathname === '/'; // True if it's the home page
  
  const linkStyle = isHomePage ? { color: 'white' } : { color: 'black' }; // White on home, black elsewhere
  
  

  return (
    <nav className="navbar">
  
<div className="navbar-left">
    {/* <img src={logo} alt="Logo" className="navbar-logo" /> */}
    <Link to="/" className="home-link" style={linkStyle}>Home</Link>
  </div>
  <div className="navbar-center">
    <ul className="navbar-links">
      <li
        className="dropdown"
        onMouseEnter={() => setMediaOpen(true)}
        onMouseLeave={() => setMediaOpen(false)}
      >
        <Link to="#" style={linkStyle}>Media</Link>
        {mediaOpen && (
          <ul className="dropdown-content media-dropdown-content">
            <li><Link to="/icons">Icons</Link></li>
            <li><Link to="#">Hymns</Link></li>
            <li><Link to="/sermons">Sermons</Link></li>
            <li><Link to="/podcasts">Podcasts</Link></li>
            <li><Link to="#">Magazines</Link></li>
          </ul>
        )}
      </li>
      <li
        className="dropdown"
        onMouseEnter={() => setLiteratureOpen(true)}
        onMouseLeave={() => setLiteratureOpen(false)}
      >
        <Link to="#">Literature</Link>
        {literatureOpen && (
          <ul className="dropdown-content literature-dropdown-content">
            <li><Link to="/Agpeya">Agpeya</Link></li>
            <li><Link to="/Synaxarium">Synaxarium</Link></li>
            <li><Link to="/Ecf">Early Church Fathers</Link></li>
            <li><Link to="/desertfathers">Desert Fathers</Link></li>
          </ul>
        )}
      </li>
      <li><Link to="/dioceses" style={linkStyle}>Dioceses</Link></li>
      <li><Link to="#" style={linkStyle}>Resources</Link></li>
    </ul>
  </div>

  <div className="navbar-right">
    <Link to="#" className="contact-link" style={linkStyle}>Contact</Link>
  </div>
</nav>


  );
}

export default Navbar;
