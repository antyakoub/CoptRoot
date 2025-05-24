import React, { useEffect, useState } from "react";
import "../styles/Podcasts.css";

const PodcastBox = ({ title, host, thumbnail, link }) => (
  <div className="music-box">
    <div className="music-content">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={thumbnail} alt={title} className="music-image" />
      </a>
    </div>
    <div className="music-info">
      <h2>{title}</h2>
      <h3>{host}</h3>
    </div>
  </div>
);

const PodcastGrid = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch("/assets/podcastAssets/podcasts.json")
      .then((res) => res.json())
      .then(setPodcasts)
      .catch(console.error);
  }, []);

  return (
    <div className="podcast-grid">
      {podcasts.map((pod, index) => (
        <PodcastBox
          key={index}
          title={pod.title}
          host={pod.host}
          thumbnail={pod.thumbnail}
          link={pod.link}
        />
      ))}
    </div>
  );
};

export default PodcastGrid;
