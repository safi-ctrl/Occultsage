import React from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
  const stats = [
    { num: '15+', label: 'Years of Expertise' },
    { num: '5000+', label: 'Spaces Harmonized' },
    { num: '100+', label: 'Courses Mentored' }
  ];

  return (
    <section className="who-3d-section">
      
      <div className="bg-glow-orb"></div>
      
      <div className="container">
        <div className="who-card-main">
          
          
          <div className="who-image-container">
            <div className="image-3d-wrapper">
              <div className="image-overlay-border"></div>
              <img src="/Acharyapankaj.jpeg" alt="Acharya Pankaj" className="consultant-img-3d" />
              <div className="experience-badge">
                <span>ESTD</span>
                <strong>2008</strong>
              </div>
            </div>
          </div>

          
          <div className="who-text-content">
            <div className="brand-tag">OCCULTSAGE INSIGHTS</div>
            <h2 className="who-heading-3d">
              What Does the Vastu Expert <br />
              <span>Acharya Pankaj</span> Say?
            </h2>
            
            <div className="who-description-box">
              <p className="p-main">
                OccultSage is a modern institute dedicated to bridging ancient Vastu Shastra 
                & Numerology with contemporary living. 
              </p>
              <p className="p-sub">
                Guided by Acharya Pankaj, we focus on scientific, <strong>no-demolition Vastu</strong> solutions. 
                Harness the full potential of cosmic energies to transform your home and workplace.
              </p>
            </div>

            
            <div className="who-stats-grid">
              {stats.map((item, index) => (
                <div key={index} className="mini-stat-card">
                  <h3>{item.num}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <div className="who-cta-area">
              <button className="pro-btn-3d">
                <span>TRANSFORM YOUR SPACE</span>
                <span className="btn-icon">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;