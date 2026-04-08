import { useEffect, useState } from "react";
import "../styles/Podcasts.css";

/* eslint-disable react/prop-types */
const PodcastItem = ({ title, host, thumbnail, link }) => {
  return (
    <figure className="podcast-card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="podcast-link">
        <div className="podcast-thumbnail-wrapper">
          <div 
            className="podcast-thumbnail" 
            style={{ backgroundImage: `url(${thumbnail.startsWith('/') ? thumbnail : `/${thumbnail}`})` }}
          ></div>
        </div>
        <div className="podcast-info">
          <h2 className="podcast-title">{title}</h2>
          <h3 className="podcast-host">{host}</h3>
        </div>
      </a>
    </figure>
  );
};

const PodcastGrid = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch("/assets/podcastAssets/podcasts.json")
      .then((res) => res.json())
      .then((data) => {
        setPodcasts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="podcast-page">
      <header className="podcast-header-section">
        <h1 className="podcast-header">Coptic Podcasts</h1>
        <p className="podcast-subheader">Explore a collection of spiritual and educational podcasts from across the Coptic Orthodox Church.</p>
      </header>
      
      <div className="podcast-grid-container">
        {podcasts.map((pod, index) => (
          <PodcastItem
            key={index}
            title={pod.title}
            host={pod.host}
            thumbnail={pod.thumbnail}
            link={pod.link}
          />
        ))}
      </div>
    </div>
  );
};

export default PodcastGrid;
