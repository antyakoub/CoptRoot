import React from 'react';
import Menu from './Menu'; // Adjust the import path as necessary
// TODO: Make title static and content slide down 

const Diocese = () => {
  // Define your menu items here with hyperlinks
  const menuItems = [
    { 
      title: 'Diocese Of The Southern United States', 
      content: (
        <div>
          <a href="https://suscopts.org/" target="_blank" rel="noopener noreferrer">Diocese Website</a>
          <a href="http://suscopticdiocese.org/stantonysanantonio/" target="_blank" rel="noopener noreferrer">St. Anthony Coptic Orthodox Church - San Antonio, TX</a>  
          <a href="https://www.facebook.com/p/St-Athanasius-Coptic-Orthodox-Church-100064537668548/" target="_blank" rel="noopener noreferrer">St. Athanathius Coptic Orthodox Church - Chattanooga, TN FaceBook </a>  
          <a href="https://www.stgeorgedaytonabeach.org" target="_blank" rel="noopener noreferrer">St. George Coptic Orthodox Church - Daytona, FL</a>
          <a href="https://new.saintgeorgecopticchurch.org" target="_blank" rel="noopener noreferrer">St. George Coptic Orthodox Church - Tampa, FL</a>
          <a href="https://saintminanashville.org/" target="_blank" rel="noopener noreferrer">St. Mena and Anba Sarabamon Coptic Orthodox Church - Nashville, TN</a>
          <a href="https://saintmarkhouston.org/smh/" target="_blank" rel="noopener noreferrer">St. Mark Coptic Orthodox Church - Houston, TX</a>
          <a href="https://www.stmarknola.org" target="_blank" rel="noopener noreferrer">St. Mark Coptic Orthodox Church - New Orleans, LA</a> 
          <a href="https://www.stmarkaz.com/" target="_blank" rel="noopener noreferrer">St. Mark Coptic Orthodox Church - Scottsdale, AZ</a>
          <a href="https://www.stmaryatlanta.org/" target="_blank" rel="noopener noreferrer">St. Mary Coptic Orthodox Church - Atlanta, GA</a>
          <a href="https://www.stmarydfw.org/" target="_blank" rel="noopener noreferrer">St. Mary Coptic Orthodox Church - Colleyville, TX</a>
          <a href="https://www.saintmaryhouston.org/" target="_blank" rel="noopener noreferrer">St. Mary & Archangel Michael Coptic Orthodox Church - Houston, TX</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
        </div>
      )
    },
    { 
      title: 'Southeast Region', 
      content: (
        <div>
          <a href="/southeast-overview" target="_blank" rel="noopener noreferrer">Overview</a>  
          <a href="/southeast-events" target="_blank" rel="noopener noreferrer">Events</a>  
          <a href="/southeast-contact" target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
      )
    },
    { 
      title: 'Midwest Region', 
      content: (
        <div>
          <a href="/midwest-overview" target="_blank" rel="noopener noreferrer">Overview</a>  
          <a href="/midwest-events" target="_blank" rel="noopener noreferrer">Events</a>  
          <a href="/midwest-contact" target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
      )
    },
    // Add more regions as needed
  ];

  return (
    <div className="diocese-container">
      {/* Pass the menu items to the Menu component */}
      <Menu items={menuItems} />
    </div>
  );
};

export default Diocese;
