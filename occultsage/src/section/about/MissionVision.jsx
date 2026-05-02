import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mv-section-compact">
      <div className="mv-container-wide">
        
        
        <div className="mv-item-card mission-border">
          <div className="mv-top-row">
            <div className="mv-icon-bg navy-bg">🎯</div>
            <span className="mv-label">OUR PURPOSE</span>
          </div>
          <div className="mv-body">
            <h2 className="mv-h2">Our Mission</h2>
            <p className="mv-p">
              To empower <strong>1 Million lives</strong> by harmonizing spaces through 
              Scientific Vastu. We provide practical, no-demolition solutions for 
              immediate positive shifts in prosperity and mental peace.
            </p>
          </div>
          <div className="mv-footer-bar navy-bar"></div>
        </div>

        
        <div className="mv-item-card vision-border">
          <div className="mv-top-row">
            <div className="mv-icon-bg gold-bg">👁️</div>
            <span className="mv-label">OUR ASPIRATION</span>
          </div>
          <div className="mv-body">
            <h2 className="mv-h2">Our Vision</h2>
            <p className="mv-p">
              To be the world's most <strong>Trusted Institute</strong> for Occult Sciences. 
              Merging Vedic traditions with modern logic to foster global peace 
              and cosmic energy alignment in every modern structure.
            </p>
          </div>
          <div className="mv-footer-bar gold-bar"></div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;