import React from "react";
import "../styles/Podcasts.css"; // Import the CSS file

const PodcastBox = () => {
  return (
    <div className="music-box">
      <div className="music-content">
        <h2 className="title">Song Title</h2>
        <p className="artist">Artist Name</p>
      </div>
      <div className="music-info">
        <p>Album: Album Name</p>
        <p>Duration: 3:45</p>
      </div>
    </div>
  );
};

export default PodcastBox;
