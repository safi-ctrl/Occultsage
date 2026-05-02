import React, { useState } from 'react';
import { Play, PlayCircle, Eye } from 'lucide-react';
import './Video.css';

const Videos = () => {
  const [featuredVideo, setFeaturedVideo] = useState({
    id: "HtQDTq7g8Jw", 
    title: "Whole House Vastu in Three steps",
    description: "Learn the core principles of Vastu Shastra for modern homes and offices."
  });

  const popularVideos = [
    { id: "91jGPVzTj44", title: "Remove vastu defects with colors ", views: "763k" },
    { id: "IzWwV2TlH-M", title: " Best Way to get 100% right Direction ", views: "326K" },
    { id: "Aoq-hVWt-NA", title: "Vastu Tips To calculate 16 directions", views: "100k" },
    { id: "YgKtZtw4fY8", title: "VASTU TIPS FOR KITCHEN", views: "179k" },
  ];

  return (
    <div className="video-page-container">
      
      <div className="video-header">
        <h1>
          Popular <span>Learning Videos</span>
        </h1>
        <p>
          Explore our most-watched sessions and master the ancient wisdom of Astro & Vastu.
        </p>
      </div>

      
      <div className="featured-video-section">
        <div className="video-player-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${featuredVideo.id}`}
            title="Featured Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="featured-content">
          <div className="badge">
            <PlayCircle size={20} />
            <span>Featured Lesson</span>
          </div>
          <h2>{featuredVideo.title}</h2>
          <p>{featuredVideo.description}</p>
          <button className="enroll-btn">
            Explore More On Youtube
          </button>
        </div>
      </div>

      
      <div className="video-grid-container">
        <h3 className="grid-title">
          <Play size={24} /> Other Popular Uploads
        </h3>
        
        <div className="video-grid">
          {popularVideos.map((video) => (
            <div 
              key={video.id} 
              className="video-card"
              onClick={() => setFeaturedVideo({ ...video, description: "Click to watch this popular lesson." })}
            >
              <div className="thumbnail-container">
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                  alt={video.title}
                />
                <div className="overlay">
                  <PlayCircle color="white" size={48} />
                </div>
              </div>
              <div className="card-info">
                <h4>{video.title}</h4>
                <div className="views-info">
                  <Eye size={14} />
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;