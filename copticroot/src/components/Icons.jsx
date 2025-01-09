// Icons.jsx
import React from 'react';
import Grid from './Grid'; // Import the Grid component

const Icons = () => {
  const items = [
    { title: 'Photo 1', imgSrc: 'path/to/photo1.jpg' },
    { title: 'Photo 2', imgSrc: 'path/to/photo2.jpg' },
    { title: 'Photo 3', imgSrc: 'path/to/photo3.jpg' },
    { title: 'Photo 4', imgSrc: 'path/to/photo4.jpg' },
    { title: 'Photo 5', imgSrc: 'path/to/photo5.jpg' },
    { title: 'Photo 6', imgSrc: 'path/to/photo6.jpg' },
    { title: 'Photo 7', imgSrc: 'path/to/photo7.jpg' },
    { title: 'Photo 8', imgSrc: 'path/to/photo8.jpg' },
    { title: 'Photo 9', imgSrc: 'path/to/photo9.jpg' },
  ];

  return (
    <div>
      <h2>Contenportary Icons</h2>
      <Grid items={items} /> {/* Pass items as props to Grid */}
    </div>
  );
};

export default Icons;
