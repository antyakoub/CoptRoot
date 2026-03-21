import React from 'react';
import Menu from './Menu';
import { FaFacebook } from "react-icons/fa";
import { diocesesData } from '../data/diocesesData';

const Diocese = () => {
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
      <Menu items={menuItems} />
    </div>
  );
};

export default Diocese;
