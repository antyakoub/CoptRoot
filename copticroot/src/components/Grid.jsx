// Grid.jsx
import React from 'react';
import '../styles/Grid.css'; // Import the CSS file for styling

const Grid = ({ items }) => { // Accept items as props
  return (
    <div className="grid">
      {items.map((item, index) => (
        <div className="grid-item" key={index}>
          <img src={item.imgSrc} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Grid;
