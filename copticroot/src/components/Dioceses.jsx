import React from 'react';
import Menu from './Menu'; // Adjust the import path as necessary
import { FaFacebook } from "react-icons/fa";


const Diocese = () => {
  // Define your menu items here with hyperlinks
  const menuItems = [
    { 
      title: 'Diocese Of The Southern United States', 
      content: (
        <div>
          <a href="https://suscopts.org/" target="_blank" rel="noopener noreferrer">Diocese Website</a>
          <a href="https://suscopts.org/diocese/churches/st-john-kame/" target="_blank" rel="noopener noreferrer">St. John Kame Coptic Orthodox Church Birmingham, AL</a>
          <a href="https://stmarynwa.org/" target="_blank" rel="noopener noreferrer">St. Mary Coptic Orthodox Church Fayetteville, AR</a>
          <a href="https://stgeorgelr.wixsite.com/sgcoclr" target="_blank" rel="noopener noreferrer">St. George Coptic Orthodox Church Little Rock, AR</a>
          <a href="https://stjosephaz.org/" target="_blank" rel="noopener noreferrer">St. Joseph the Carpenter Coptic Orthodox Church Mesa, AZ</a>
          <a href="https://archangelphx.org/" target="_blank" rel="noopener noreferrer">Archangel Michael Coptic Orthodox Church Phoenix, AZ</a>
          <a href="https://www.stmaryaz.org/" target="_blank" rel="noopener noreferrer">St. Mary Coptic Orthodox Church Phoenix (Peoria), AZ</a>
          <a href="https://www.stmarkaz.com/" target="_blank" rel="noopener noreferrer">St. Mark Coptic Orthodox Church Phoenix (Scottsdale), AZ</a>
          <a href="https://www.saintjohnaz.org/" target="_blank" rel="noopener noreferrer">St. John the Beloved Coptic Orthodox Church Tucson, AZ</a>
          <a href="https://www.stlukefl.org/" target="_blank" rel="noopener noreferrer">St. Luke Coptic Orthodox Church Boca Raton, FL</a>
          <a href="https://stmarystmina.org/" target="_blank" rel="noopener noreferrer">St. Mary & St. Mina Coptic Orthodox Church Clearwater, FL</a>
          <a href="https://www.stgeorgedaytonabeach.org/" target="_blank" rel="noopener noreferrer">St. George Coptic Orthodox Church Daytona Beach, FL</a>
          <a href="https://stmarydelrayfl.org/" target="_blank" rel="noopener noreferrer">St. Mary Coptic Orthodox Church Delray Beach, FL</a>
          <a href="https://stmarkfortmyers.org/" target="_blank" rel="noopener noreferrer">St. Mark Coptic Orthodox Church Fort Myers, FL</a>
          <a href="https://stdemianachurch.org/" target="_blank" rel="noopener noreferrer">St. Demiana Coptic Orthodox Church Jacksonville, FL</a>
          <a href="https://stshenoudachurch.org/" target="_blank" rel="noopener noreferrer">St. Shenouda the Archimandrite Coptic Orthodox Church Largo, FL</a>
          <a href="https://stanthonyorlando.org/" target="_blank" rel="noopener noreferrer">St. Anthony Coptic Orthodox Church Maitland, FL</a>
          <a href="https://www.archangelmichaelmelbourne.org/" target="_blank" rel="noopener noreferrer">Archangel Michael Coptic Orthodox Church Melbourne, FL</a>
          <a href="https://stjohnmiami.org/" target="_blank" rel="noopener noreferrer">St. John the Baptist Coptic Orthodox ChurchMiami, FL</a>
          <a href="https://www.stverenafl.org/" target="_blank" rel="noopener noreferrer">St. Verena Coptic Orthodox Church New Port Richey, FL</a>
          <a href="https://www.stmaryorlando.org/" target="_blank" rel="noopener noreferrer">St. Mary & Archangel Michael Coptic Orthodox Church Orlando, FL</a>
          <a href="https://www.strebekahorlando.org/" target="_blank" rel="noopener noreferrer">St. Rebekah Coptic Orthodox Church Orlando, FL</a>
          <a href="https://stpeterorlando.org/" target="_blank" rel="noopener noreferrer">St. Peter the Apostle Coptic Orthdox Church Orlando, FL</a>
          <a href="https://www.stcyrilorlando.org/" target="_blank" rel="noopener noreferrer">St. Cyril the Great Coptic Orthodox Church Orlando (Davenport), FL</a>
          <a href="https://www.stathanasiusorlando.org/" target="_blank" rel="noopener noreferrer">St. Athanasius Coptic Orthodox Church Orlando (Sanford), FL</a>
          <a href="https://www.st-philopateerfl.org/" target="_blank" rel="noopener noreferrer">St. Philopateer Mercurius Coptic Orthodox Church Palm Harbor, FL</a>
          <a href="http://stathanasiuspensacola.org/" target="_blank" rel="noopener noreferrer">St. Athanasius Coptic Orthodox Church Pensacola, FL</a>
          <a href="https://stsimonthetanner.org/" target="_blank" rel="noopener noreferrer">St. Simon the Tanner Coptic Orthodox Church Sarasota, FL</a>
          <a href="https://www.smsgchurch.org/" target="_blank" rel="noopener noreferrer">St. Mary & St. George Coptic Orthodox Church Tallahassee, FL</a>
          <a href="https://www.saintgeorgecopticchurch.org/" target="_blank" rel="noopener noreferrer">St. George Coptic Orthodox Church Tampa, FL</a>
          <a href="https://www.streweis.org/" target="_blank" rel="noopener noreferrer">St. Reweis Coptic Orthodox Church Wesley Chapel, FL</a>
          <a href="https://www.facebook.com/StPeterSealOfTheMartyrsCopticOrthodoxChurch/" target="_blank" rel="noopener noreferrer">St. Peter, Seal of the Martyrs Coptic Orthodox Church West Palm Beach, FL <FaFacebook /></a>
          <a href="https://www.stmarymagdalenegnv.org/home" target="_blank" rel="noopener noreferrer">St. Mary Magdalene Coptic Orthodox Church Gainesville, FL</a>
          <a href="https://www.stcyriljaxcopts.org/" target="_blank" rel="noopener noreferrer">St Cyril the Sixth Coptic Orthodox Church Jacksonville, FL</a>
          <a href="https://www.facebook.com/stabraamcocfl/" target="_blank" rel="noopener noreferrer">St. Abraam Coptic Orthodox Church Jupiter, FL <FaFacebook /></a> 
          <a href="https://suscopts.org/diocese/churches/st-makarious-tampa/" target="_blank" rel="noopener noreferrer">St. Macarius Coptic Orthodox Church Tampa, FL *VERIFY*</a> 
          <a href="https://www.facebook.com/p/Saint-Moses-The-Strong-Coptic-Orthodox-Church-The-VillagesFl-100069665542403/" target="_blank" rel="noopener noreferrer">St. Moses The Strong Coptic Orthodox Church The Villages, FL <FaFacebook /></a>
          <a href="https://www.stpaulatlanta.org/" target="_blank" rel="noopener noreferrer">St. Paul Coptic Orthodox Church Atlanta, GA</a>
          <a href="https://www.stmaryatlanta.org/" target="_blank" rel="noopener noreferrer">St. Mary Coptic Orthodox Church Atlanta, GA</a>
          <a href="https://www.stmarkatl.church/" target="_blank" rel="noopener noreferrer">St. Mark Coptic Orthodox Church Atlanta, GA</a>
          <a href="https://staugustineaugusta.org/" target="_blank" rel="noopener noreferrer">St. Augustine Coptic Orthodox Church Augusta, GA</a>
          <a href="https://convent.suscopts.org/" target="_blank" rel="noopener noreferrer">St. Mary & St. Demiana Coptic Orthodox Convent Dawsonville, GA</a>
          <a href="https://www.archangelmacon.com/" target="_blank" rel="noopener noreferrer">Archangel Michael Coptic Orthodox Church Macon, GA</a>
          <a href="https://stapanoubchurch.org/" target="_blank" rel="noopener noreferrer">St. Apanoub Coptic Orthodox Church Savannah, GA</a>
          <a href="https://www.facebook.com/stmarknola/" target="_blank" rel="noopener noreferrer">St. Mark Coptic Orthodox Church New Orleans, LA <FaFacebook /></a>
          <a href="https://stbarbarashreveport.org/" target="_blank" rel="noopener noreferrer">St. Barbara Coptic Orthodox Church Shreveport, LA</a>
          <a href="https://www.peterpaulcoc.org/" target="_blank" rel="noopener noreferrer">St. Peter & St. Paul Coptic Orthodox Church Tulsa, OK</a>
          <a href="https://www.suscopts.org/stathanasiuschattanooga/index.htm" target="_blank" rel="noopener noreferrer">St. Athanasius Coptic Orthodox Church Chattanooga, TN</a>
          <a href="https://www.facebook.com/clarksvilleorthodox/" target="_blank" rel="noopener noreferrer">St. Abba Sarapamone Coptic Orthodox Church Clarksville, TN <FaFacebook /></a>
          <a href="https://stbarbaratn.org/" target="_blank" rel="noopener noreferrer">St. Barbara Coptic Orthodox Church Franklin, TN</a>
          <a href="https://stmaryco.org/" target="_blank" rel="noopener noreferrer">St. Mary Coptic Orthodox Church Knoxville, TN</a>
          <a href="https://www.archangelmichaeltn.org/" target="_blank" rel="noopener noreferrer">Archangel Michael Coptic Orthodox Church La Vergne, TN</a>
          <a href="https://www.smsrchurch.org/" target="_blank" rel="noopener noreferrer">St. Mary & St. Rueis Coptic Orthodox Church Memphis, TN</a>
          <a href="https://www.stphilopateerchurch.org/" target="_blank" rel="noopener noreferrer">St. Philopateer Coptic Orthodox Church Mt. Juliet, TN</a>
          <a href="https://www.stkarastn.org/" target="_blank" rel="noopener noreferrer">St. Karas Coptic Orthodox Church Murfreesboro, TN</a>
          <a href="https://www.facebook.com/p/St-Paul-The-Hermit-Coptic-Orthodox-Church-Murfreesboro-TN-61560111899395/" target="_blank" rel="noopener noreferrer">St. Paul the Hermit Coptic Orthodox Church Murfreesboro, TN <FaFacebook/></a>
          <a href="https://georgekmetry.wixsite.com/stkyrillos" target="_blank" rel="noopener noreferrer">St. Kyrillos the Sixth Coptic Orthodox Church Nashville, TN</a>
          <a href="https://www.stmacariustn.org/" target="_blank" rel="noopener noreferrer">St. Macarius the Great Coptic Orthodox Church Nashville, TN</a>
          <a href="https://www.stvnashville.org/" target="_blank" rel="noopener noreferrer">St. Verena Coptic Orthodox Church Nashville, TN</a>
          <a href="https://www.saintpishoy.org/" target="_blank" rel="noopener noreferrer">St. Pishoy Coptic Orthodox Church Nashville, TN</a>
          <a href="https://www.stgeorgecocnashville.org/" target="_blank" rel="noopener noreferrer">St. George Coptic Orthodox Church Nashville, TN</a>
          <a href="https://stmarynashville.org/" target="_blank" rel="noopener noreferrer">St. Mary Coptic Orthodox Church Nashville, TN</a>
          <a href="https://www.stmarktn.org/" target="_blank" rel="noopener noreferrer">St. Mark Coptic Orthodox Church Nashville, TN</a>
          <a href="https://saintminanashville.org/" target="_blank" rel="noopener noreferrer">St. Mina Coptic Orthodox Church Nashville, TN</a>
          <a href="https://www.stjohnsmyrna.org/" target="_blank" rel="noopener noreferrer">St. John the Beloved Coptic Orthodox Church Smyrna, TN</a>
          <a href="https://www.facebook.com/SaintTheodoreNashville/" target="_blank" rel="noopener noreferrer">St. Theodore Coptic Orthodox Church Hendersonville, TN <FaFacebook /></a>
          <a href="https://stgeorgearlington.org/" target="_blank" rel="noopener noreferrer">St. George Coptic Orthodox Church Arlington, TX</a>
          <a href="https://holycrossaustin.church/" target="_blank" rel="noopener noreferrer">The Holy Cross Coptic Orthodox Church Austin, TX</a>
          <a href="https://archangelmichaeldfw.org/" target="_blank" rel="noopener noreferrer">Archangel Michael Coptic Orthodox Church Bedford, TX</a>
          <a href="https://www.stmarydfw.org/" target="_blank" rel="noopener noreferrer">St. Mary Coptic Orthodox Church Colleyville, TX</a>
          <a href="https://ststephencypresstx.org/" target="_blank" rel="noopener noreferrer">St. Stephen Coptic Orthodox Church Cypress, TX</a>
          <a href="http://www.stphilopateerdallas.org/" target="_blank" rel="noopener noreferrer">St. Philopateer Coptic Orthodox Church Dallas, TX</a>
          <a href="https://www.stmarinadfw.com/" target="_blank" rel="noopener noreferrer">St. Marina Coptic Orthodox Church Dallas, TX</a>
          <a href="https://www.stabanoub-dallas.org/" target="_blank" rel="noopener noreferrer">St. Abanoub Coptic Orthodox Church Euless, TX</a>
          <a href="https://www.stmeenadfw.org/" target="_blank" rel="noopener noreferrer">St. Meena Coptic Orthodox Church Fort Worth, TX</a>
          <a href="https://stpaulhouston.org/" target="_blank" rel="noopener noreferrer">St. Paul Coptic Orthodox Church Houston, TX</a>
          <a href="https://www.saintmaryhouston.org/" target="_blank" rel="noopener noreferrer">St. Mary & Archangel Michael Coptic Orthodox Church Houston, TX</a>
          <a href="https://archangelraphael.org/" target="_blank" rel="noopener noreferrer">Archangel Raphael Coptic Orthodox Church Houston, TX</a>
          <a href="https://saintmarkhouston.org/smh/" target="_blank" rel="noopener noreferrer">St. Mark Coptic Orthodox Church Houston, TX</a>
          <a href="https://www.saintgeorgekaty.org/" target="_blank" rel="noopener noreferrer">St. George Coptic Orthodox Church Katy, TX</a>
          <a href="https://www.stgeorgelubbock.org/" target="_blank" rel="noopener noreferrer">St. George Coptic Orthodox Church Lubbock, TX</a>
          <a href="https://stmarkdfw.org/" target="_blank" rel="noopener noreferrer">St. Mark Coptic Orthodox Church Prosper, TX</a>
          <a href="https://stantonychurch.org/" target="_blank" rel="noopener noreferrer">St. Antony Coptic Orthodox Church San Antonio, TX</a>
          <a href="https://stdemianasa.org/" target="_blank" rel="noopener noreferrer">St. Demiana Coptic Orthodox Church San Antonio, TX</a>
          <a href="https://abbey.suscopts.org/" target="_blank" rel="noopener noreferrer">St. Mary & St. Moses Monastery Sandia, TX</a>
          <a href="https://www.stpkvi-dfw.org/" target="_blank" rel="noopener noreferrer">Pope Kyrillos the Sixth Coptic Orthodox Church Dallas, TX</a>
          <a href="https://www.facebook.com/p/St-Photini-Coptic-Orthodox-Church-El-Paso-Texas-100064717206720/" target="_blank" rel="noopener noreferrer">St. Photini Coptic Orthodox Church El Paso, TX <FaFacebook /></a>
          <a href="https://www.stjulittapearland.org/" target="_blank" rel="noopener noreferrer">St. Julitta Coptic Orthodox Church Pearland, TX</a>
          <a href="https://www.facebook.com/ChildrenofBethlehem/" target="_blank" rel="noopener noreferrer">Children of Bethlehem Coptic Orthodox Church Tyler, TX <FaFacebook /></a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
        </div>
      )
    },
    { 
      title: 'Diocese of Los Angeles, Southern California and Hawaii', 
      content: (
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
          <a href="#" target="_blank" rel="noopener noreferrer">title</a>
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


