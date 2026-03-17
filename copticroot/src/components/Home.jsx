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
      </div>
      {/* Content section */}
      <img className="frieze-image" src="/assets/copticFrieze.jpg" alt="frieze" />
      <div className="content">
        <section className="content-section">
          <h2>Why Coptic Root?</h2>
          <p>In my experience many Coptic resources are fragmented and difficult to find, so a single platform would increase accessibility and community engagement.</p>
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
