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
      {/* Add a image that is 1920 * any height preforablly small like a band or crest */}
      <div className="content">
        <img src="../assets/copticFrieze.jpg" alt="frieze" />
        <section className="content-section">
          <h2>Content</h2>
          <p>This is where the content starts after the video section.</p>
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
