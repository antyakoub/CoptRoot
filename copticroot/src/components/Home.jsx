import Video from "../assets/coptroot.mp4";
import React from 'react';
import '../styles/Home.css'; // Import the CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="video-container">
        <video
          className="background-video"
          src={Video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Coptic Root</h1>
          <p className="hero-subtitle">The Centralized Hub for Coptic Orthodox Resources</p>
        </div>
      </div>
      
      {/* Content section */}
      <img className="frieze-image" src="/assets/copticFrieze.jpg" alt="frieze" />
      <div className="content">
        <section className="content-section">
          <h2>Why Coptic Root?</h2>
          <p>In my experience many Coptic resources are fragmented and difficult to find, so a single platform would increase accessibility and community engagement.</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
