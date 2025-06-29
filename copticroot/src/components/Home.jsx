import Video from "../assets/coptroot.mp4";
import React, { useEffect } from 'react';
import '../styles/Home.css'; // Import the CSS for styling
import {motion, useMotionTemplate, useMotionValue, animate} from "framer-motion" 

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Home = () => {
  const color = useMotionValue(COLORS[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, black 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    })}
    , [])

  return (
    <div className="home-container">
      <motion.section className="heroBG" 
       style={{backgroundImage}}>
        <div className="hero-content">


          <h1 className="hero-heading">
            Everything Coptic.<br />
            All in one Place.
          </h1>

          <p className="hero-description">
            Built For anyone exploring the faith — no clutter, no digging, just clarity.
          </p>
          <motion.button
          className="motion-button"
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          style={{
            border,      // example static border color
            boxShadow,
          }}>
        Explore Now
      </motion.button>
        </div>

      </motion.section>
      {/* Content section */}
      <img className="frieze-image" src="/assets/copticFrieze.jpg" alt="frieze" />
      <div className="content">
        <section className="content-section">
          <h2>Why Coptic Root?</h2>
          <p>
            The Coptic Orthodox Church has a deep and rich heritage, much of which is scattered across various websites, apps, and archives. 
            Coptic Root makes this wealth of information discoverable and usable through a unified source
          </p>
        </section>

        <section className="content-section">
          <h2>More Content</h2>
          <p>This section allows for more details or additional components like a menu.</p>
        </section>

        <section className="content-section">
          <h2>Final Content</h2>
          <p>Even more content that keeps the page scrolling.</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
