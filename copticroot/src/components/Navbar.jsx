import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MenuOverlay from './MenuOverlay';
import '../styles/Navbar.css';
import logo from '../assets/jesusFishcross.png'; 

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: "top -80",
      onEnter: () => navbarRef.current?.classList.add('scrolled'),
      onLeaveBack: () => navbarRef.current?.classList.remove('scrolled'),
    });

    return () => {
      trigger.kill();
    };
  }, []);

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
    <>
      <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`} ref={navbarRef}>
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
          <span>COPTICROOT</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          
          <li className={`dropdown ${openDropdown === 'pray' ? 'open' : ''}`} 
              onMouseEnter={() => setOpenDropdown('pray')}
              onMouseLeave={() => setOpenDropdown(null)}>
            <Link to="#" onClick={(e) => { e.preventDefault(); toggleDropdown('pray'); }}>
              Pray
            </Link>
            <ul className="dropdown-content">
              <li><Link to="/agpeya" onClick={closeMenu}>Agpeya</Link></li>
              <li><Link to="#" onClick={closeMenu}>Hymns</Link></li>
            </ul>
          </li>

          <li className={`dropdown ${openDropdown === 'learn' ? 'open' : ''}`}
              onMouseEnter={() => setOpenDropdown('learn')}
              onMouseLeave={() => setOpenDropdown(null)}>
            <Link to="#" onClick={(e) => { e.preventDefault(); toggleDropdown('learn'); }}>
              Learn
            </Link>
            <ul className="dropdown-content">
              <li><Link to="/Synaxarium" onClick={closeMenu}>Synaxarium</Link></li>
              <li><Link to="/sermons" onClick={closeMenu}>Sermons</Link></li>
              <li><Link to="/podcasts" onClick={closeMenu}>Podcasts</Link></li>
              <li><Link to="/ecf" onClick={closeMenu}>Early Church Fathers</Link></li>
              <li><Link to="#" onClick={closeMenu}>Desert Fathers</Link></li>
            </ul>
          </li>

          <li className={`dropdown ${openDropdown === 'discover' ? 'open' : ''}`}
              onMouseEnter={() => setOpenDropdown('discover')}
              onMouseLeave={() => setOpenDropdown(null)}>
            <Link to="#" onClick={(e) => { e.preventDefault(); toggleDropdown('discover'); }}>
              Discover
            </Link>
            <ul className="dropdown-content">
              <li><Link to="/icons" onClick={closeMenu}>Icons</Link></li>
              <li><Link to="/dioceses" onClick={closeMenu}>Dioceses</Link></li>
              <li><Link to="/resources" onClick={closeMenu}>Resources</Link></li>
              <li><Link to="#" onClick={closeMenu}>Magazines</Link></li>
            </ul>
          </li>

          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className={`mobile-menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="plus-icon">
            <div className="line line-h"></div>
            <div className="line line-v"></div>
          </div>
        </div>

        <Link to="/contact" className="nav-cta" onClick={closeMenu}>Find A Church</Link>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}

export default Navbar;