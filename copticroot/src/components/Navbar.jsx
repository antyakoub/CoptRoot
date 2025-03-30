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
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li
          className="dropdown"
          onMouseEnter={() => setMediaOpen(true)}
          onMouseLeave={() => setMediaOpen(false)}
        >
          <Link to="#" style={linkStyle}>Media</Link>
          {mediaOpen && (
            <ul className="dropdown-content media-dropdown-content">
              <li><Link to="/icons" style={{ color: 'white' }}>Icons</Link></li>
              <li><Link to="#" style={{ color: 'white' }}>Hymns</Link></li>
              <li><Link to="#" style={{ color: 'white' }}>Sermons</Link></li>
              <li><Link to="/podcasts" style={{ color: 'white' }}>Podcasts</Link></li>
              <li><Link to="#" style={{ color: 'white' }}>Magazines</Link></li>
            </ul>
          )}
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setLiteratureOpen(true)}
          onMouseLeave={() => setLiteratureOpen(false)}
        >
          <Link to="#" style={linkStyle}>Literature</Link>
          {literatureOpen && (
            <ul className="dropdown-content literature-dropdown-content">
              <li><a href="https://www.agpeya.org/index.html" style={{ color: 'white' }} rel="noopener noreferrer" target="_blank">Agpeya</a></li>
              <li><a href="https://www.copticchurch.net/synaxarium" style={{ color: 'white' }} rel="noopener noreferrer" target="_blank">Synaxarium</a></li>
              <li><Link to="/Ecf" style={{ color: 'white' }}>Early Church Fathers</Link></li>
              <li><Link to="#" style={{ color: 'white' }}>Desert Fathers</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/dioceses" style={linkStyle}>Dioceses</Link></li>
        <li><Link to="#" style={linkStyle}>Resources</Link></li>
        <li><Link to="#" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
