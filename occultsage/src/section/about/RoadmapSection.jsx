import React from 'react';
import './RoadmapSection.css';

const Roadmap = () => {
  const stats = [
    { num: "5000+", label: "Consultations Done" },
    { num: "2000+", label: "Successful Students" },
    { num: "15+", label: "Years of Legacy" }
  ];

  return (
    <section className="roadmap-classic-section">
      <div className="roadmap-container">
        
       
        <header className="roadmap-header">
          <span className="roadmap-eyebrow">The Science of Excellence</span>
          <h2 className="roadmap-main-title">History And Roadmap</h2>
          <div className="roadmap-gold-divider"></div>
        </header>

        
        <article className="roadmap-narrative">
          <p className="lead-text">
            Acharya Pankaj’s journey is a testament to the power of ancient Vedic sciences. 
            With over <span className="highlight-gold">15+ years of profound research</span> in 
            Vastu Shastra and Numerology, he has evolved into a globally recognized mentor.
          </p>
          <p className="secondary-text">
            Throughout his illustrious career, Acharya Pankaj has been a catalyst for change, 
            helping thousands of individuals align their environments with cosmic energies. 
            His unique <span className="text-white">"No-Demolition" Vastu methodology</span> 
            has redefined modern Vedic consultancy across the globe.
          </p>
        </article>

        
        <div className="roadmap-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="classic-stat-card">
              <div className="card-border-top"></div>
              <h3 className="stat-number-classic">{stat.num}</h3>
              <p className="stat-label-classic">{stat.label}</p>
            </div>
          ))}
        </div>

        
        <footer className="roadmap-footer-area">
          <p className="footer-info">
            Empowering over <strong>2,000+ students</strong> globally to become 
            professional Vastu experts and Numerologists.
          </p>
          <h4 className="mission-quote">
            "A clear path to health, wealth, and mental peace."
          </h4>
          <div className="cta-wrapper">
            <button className="luxury-btn">
              LEARN FROM THE MASTER <span>→</span>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Roadmap;