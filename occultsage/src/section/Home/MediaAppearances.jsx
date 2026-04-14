import React from 'react';
import './MediaAppearances.css';

const MediaAppearances = () => {
  const videoData = [
    { id: "ktlRp0Vr99g", title: "Colours for all 16 Directions" },
    { id: "iSRhQzea5ZE", title: "House Floor Plan As Per Vaastu" },
    { id: "u-11Cux0SM4", title: "Complete Vastu for House" },
    { id: "Fay0Rf7zxKI", title: "16 Directions in Home According to Vastu" },
    { id: "2LbJex24jGY", title: "Best Tips for Stairs" },
    { id: "vQDK-rbi3JQ", title: "Vastu Tips For Kitchen" },
  ];

  return (
    <section className="media-section">
      <div className="container">
        <div className="media-header">
          <span className="sub-title">Media Presence</span>
          <h2>Featured Media Appearances</h2>
          <div className="title-divider"></div>
          <p>Join millions who’ve gained valuable insights from our expert discussions</p>
        </div>

        <div className="media-grid">
          {videoData.map((video, index) => (
            <div className="media-card" key={index}>
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" className="card-link">
                <div className="thumbnail-box">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                    alt={video.title} 
                    onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg` }}
                  />
                  <div className="play-overlay">
                    <div className="yt-play-btn">
                       <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="media-info">
                  <h3>{video.title}</h3>
                  <span className="watch-now">Watch Video <span className="arrow">→</span></span>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="youtube-cta-wrapper">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Want More Vastu Tips?</h2>
              <p>Subscribe to our YouTube channel for daily Vastu insights, tips, and live sessions.</p>
              <a href="https://www.youtube.com/@VastuShikhar" target="_blank" rel="noreferrer" className="subscribe-btn">
                <div className="btn-icon">▶</div>
                <span>Subscribe Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaAppearances;