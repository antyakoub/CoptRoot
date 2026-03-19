import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { Menu, X } from 'lucide-react'; // Import Menu and X icons
import '../styles/Navbar.css';
import logo from '../assets/jesusFishcross.png'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  
  return (
    <nav className="navbar-container">
      <div className="glass-panel">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li className={`dropdown ${openDropdown === 'media' ? 'open' : ''}`} 
              onMouseEnter={() => !isMenuOpen && setOpenDropdown('media')}
              onMouseLeave={() => !isMenuOpen && setOpenDropdown(null)}>
            <Link to="#" className="dropdown-trigger" onClick={(e) => { e.preventDefault(); toggleDropdown('media'); }}>
              Media
            </Link>
            <ul className="dropdown-content">
              <li><Link to="/icons" onClick={closeMenu}>Icons</Link></li>
              <li><Link to="#" onClick={closeMenu}>Hymns</Link></li>
              <li><Link to="/sermons" onClick={closeMenu}>Sermons</Link></li>
              <li><Link to="/podcasts" onClick={closeMenu}>Podcasts</Link></li>
              <li><Link to="#" onClick={closeMenu}>Magazines</Link></li>
            </ul>
          </li>
          <li className={`dropdown ${openDropdown === 'literature' ? 'open' : ''}`}
              onMouseEnter={() => !isMenuOpen && setOpenDropdown('literature')}
              onMouseLeave={() => !isMenuOpen && setOpenDropdown(null)}>
            <Link to="#" className="dropdown-trigger" onClick={(e) => { e.preventDefault(); toggleDropdown('literature'); }}>
              Literature
            </Link>
            <ul className="dropdown-content">
              <li><Link to="/agpeya" onClick={closeMenu}>Agpeya</Link></li>
              <li><Link to="/Synaxarium" onClick={closeMenu}>Synaxarium</Link></li>
              <li><Link to="/ecf" onClick={closeMenu}>Early Church Fathers</Link></li>
              <li><Link to="#" onClick={closeMenu}>Desert Fathers</Link></li>
            </ul>
          </li>
          <li><Link to="/dioceses" onClick={closeMenu}>Dioceses</Link></li>
          <li><Link to="/resources" onClick={closeMenu}>Resources</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;