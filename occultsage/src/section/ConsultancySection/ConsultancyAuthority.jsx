import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Microscope, Zap } from 'lucide-react';
import './ConsultancyAuthority.css';


const pillars = [
  {
    icon: <Award size={32} />,
    title: "15+ Years Mastery",
    desc: "A decade of expertise transforming 5000+ global spaces using precise and authentic Vedic calculations."
  },
  {
    icon: <Microscope size={32} />,
    title: "Scientific Approach",
    desc: "Logic-driven remedies focused on energy flow and magnetism, moving beyond myths for proven results."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Zero Demolition",
    desc: "Fixing complex Vastu Doshas using elemental balancers and colors without breaking a single brick."
  },
  {
    icon: <Zap size={32} />,
    title: "Astro-Vastu Sync",
    desc: "Syncing property energy with your personal birth chart to deliver 100% customized lifestyle results."
  }
];
const ConsultancyAuthority = () => {
  return (
    <section className="authority-section">
      <div className="auth-container">
        <div className="auth-content-left">
          <span className="auth-kicker">The Occultsage Edge</span>
          <h2>Why Thousands Trust <br /><span className="lime-text">Acharya Pankaj</span></h2>
          <p className="auth-main-para">
            Vastu is not just about directions; it's about the resonance between you and your space. 
            Acharya Pankaj bridges the gap between ancient wisdom and modern lifestyle.
          </p>
          
          <div className="auth-stats">
            <div className="stat-item">
              <span className="stat-num">10k+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">12+</span>
              <span className="stat-label">Countries</span>
            </div>
          </div>
        </div>

        <div className="auth-grid-right">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              className="pillar-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="pillar-icon">{pillar.icon}</div>
              <h4>{pillar.title}</h4>
              <p>{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultancyAuthority;