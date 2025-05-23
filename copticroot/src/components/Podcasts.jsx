import React from "react";
import PodArt from "../assets/maxresdefault.jpg"
import "../styles/Podcasts.css"; // Import the CSS file

const PodcastBox = () => {
  return (
    <div className="music-box">
      <div className="music-content">
      <img src={PodArt} alt="Podcast" className="music-image" />
      </div>
      <div className="music-info">
        <h2>Podcast Title</h2>
        <h3>Podcast Host</h3>
      </div>
    </div>
  );
};

const PodcastGrid = () => {
  return (
    <div className="podcast-grid">
      
      <PodcastBox />
      <PodcastBox />
      <PodcastBox />
    </div>
  );
};

export default PodcastGrid;
