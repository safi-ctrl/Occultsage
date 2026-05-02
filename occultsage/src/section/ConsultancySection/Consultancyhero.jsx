import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import './Consultancy.css';


const Consultancyhero = () => {
  return (
    <section className="consult-hero-wrapper">
      
      <div className="glow-orb-top"></div>
      <div className="sacred-pattern-overlay"></div>

      <div className="consult-hero-container">
        
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="consult-hero-left"
        >
          <div className="consult-badge">
            <Sparkles size={16} className="lime-text" />
            <span>Premium Vastu Solutions</span>
          </div>

          <h1>Transform Your Space into a <br />
            <span className="gold-shimmer">Magnet for Success</span>
          </h1>

          <p className="hero-description">
            Experience the profound impact of Scientific Vastu. Acharya Pankaj combines 
            ancient Vedic wisdom with your personal astrology to create spaces that 
            radiate prosperity, health, and harmony—<strong>without any structural demolition.</strong>
          </p>

          <div className="hero-trust-points">
            <div className="t-point">
              <ShieldCheck size={20} className="lime-text" />
              <span>15+ Years Mastery</span>
            </div>
            <div className="t-point">
              <Calendar size={20} className="lime-text" />
              <span>Personalized One-on-One</span>
            </div>
          </div>

          <div className="hero-cta-group">
            <button className="btn-main-gold">Book a Consultation</button>
            <button className="btn-outline-white">How it Works</button>
          </div>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="consult-hero-right"
        >
          <div className="portrait-frame">
            <div className="frame-border-decoration"></div>
           <img src="/acharyaji.jpeg" alt="Acharya Pankaj" className="acharya-main-img" />
            
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="achievement-card"
            >
              <div className="icon-circle">ॐ</div>
              <div>
                <strong>Global Presence</strong>
                <p>Consulted in 10+ Countries</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Consultancyhero;