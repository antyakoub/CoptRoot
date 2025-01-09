import React, { useState } from 'react';
import '../styles/Menu.css';

function Menu({ items }) {
  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        {items.map((item, index) => (
          <MenuItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-item-container">
      <div className="menu-title" onClick={toggleMenu}>
        <span className="menu-title-text">{title}</span>
        <span className="plus-sign">{isOpen ? '-' : '+'}</span>
      </div>
      <div className="menu-line" />
      <div className={`menu-content-wrapper ${isOpen ? 'slide-down' : 'slide-up'}`}>
        <div className="content">{content}</div>
      </div>
    </div>
  );
}

export default Menu;
