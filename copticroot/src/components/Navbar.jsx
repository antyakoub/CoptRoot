import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import '../styles/Navbar.css';
import logo from '../assets/jesusFishcross.png'; 

function Navbar() {
  const location = useLocation(); // Get the current location
  
  return (
    <nav className="navbar-container">
      <div className="glass-panel">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="#">Media</Link>
            <ul className="dropdown-content">
              <li><Link to="/icons">Icons</Link></li>
              <li><Link to="#">Hymns</Link></li>
              <li><Link to="/sermons">Sermons</Link></li>
              <li><Link to="/podcasts">Podcasts</Link></li>
              <li><Link to="#">Magazines</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#">Literature</Link>
            <ul className="dropdown-content">
              <li><Link to="/Agpeya">Agpeya</Link></li>
              <li><Link to="/Synaxarium">Synaxarium</Link></li>
              <li><Link to="/Ecf">Early Church Fathers</Link></li>
              <li><Link to="/desertfathers">Desert Fathers</Link></li>
            </ul>
          </li>
          <li><Link to="/dioceses">Dioceses</Link></li>
          <li><Link to="#">Resources</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;