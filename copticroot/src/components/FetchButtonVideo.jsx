import React, { useState } from 'react';
import axios from 'axios';

const FetchVideoButton = () => {
  const [videoId, setVideoId] = useState('');
  const [message, setMessage] = useState('');

  const handleFetchVideo = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/fetch-video', {
        videoId: videoId,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error fetching video data');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter Video ID" 
        value={videoId} 
        onChange={(e) => setVideoId(e.target.value)} 
      />
      <button onClick={handleFetchVideo}>Fetch Video</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FetchVideoButton;
