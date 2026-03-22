import React, { useState } from 'react';
import Menu from './Menu';
import { FaFacebook } from "react-icons/fa";
import { Search } from 'lucide-react';
import { diocesesData } from '../data/diocesesData';
import '../styles/Dioceses.css';

const Diocese = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Transform structured data into Menu items
  const menuItems = diocesesData.map((diocese) => ({
    title: diocese.title,
    content: (
      <div>
        {/* Main Diocese Website link */}
        {diocese.website && (
          <a href={diocese.website} target="_blank" rel="noopener noreferrer">
            Diocese Website
          </a>
        )}
        
        {/* Individual Church links */}
        {diocese.churches.map((church, idx) => (
          <a key={idx} href={church.url} target="_blank" rel="noopener noreferrer">
            {church.name}, {church.city}, {church.state}
            {church.platform === 'facebook' && <FaFacebook style={{ marginLeft: '5px' }} />}
          </a>
        ))}
      </div>
    )
  }));

  return (
    <div className="diocese-container">
      {/* Search Bar UI */}
      <div className="search-container">
        <div className="search-bar-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search by Church, State, or City..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="search-icon" size={20} />
        </div>
      </div>

      <Menu items={menuItems} />
    </div>
  );
};

export default Diocese;
