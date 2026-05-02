import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import { ShieldCheck, GraduationCap, Users, ExternalLink, Sparkles } from 'lucide-react';
import './MeetAcharya.css';

const MeetAcharya = () => {
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate('/consultancy'); 
  };

  return (
    <section className="acharya-section-wrapper">
      <div className="bg-circle-glow top-right"></div>
      <div className="bg-circle-glow bottom-left"></div>

      <div className="acharya-container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="acharya-card-main"
        >
          <div className="acharya-visual-side">
            <div className="img-overlay-gradient"></div>
            <img src="./acharyaji.jpeg" alt="Acharya Pankaj" className="main-portrait" />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="experience-float-badge"
            >
              <div className="exp-content">
                <span className="exp-num">15+</span>
                <span className="exp-text">YEARS OF <br/> LEGACY</span>
              </div>
            </motion.div>
          </div>

          <div className="acharya-text-side">
            <div className="top-meta">
              <span className="pill-badge"><Sparkles size={14} /> VASTU & ASTROLOGY SPECIALIST</span>
            </div>

            <h1 className="acharya-name">
              Meet Acharya <span className="gold-gradient-text">Pankaj</span>
            </h1>
            
            <p className="acharya-tagline">
              Connecting Ancient Vedic Science with Modern Living
            </p>

            <div className="stats-mini-row">
              <div className="stat-pill">
                <ShieldCheck size={18} className="icon-gold" />
                <span>Certified Expert</span>
              </div>
              <div className="stat-pill">
                <GraduationCap size={18} className="icon-gold" />
                <span>Scientific Approach</span>
              </div>
              <div className="stat-pill">
                <Users size={18} className="icon-gold" />
                <span>50k+ Seekers</span>
              </div>
            </div>

            <div className="quote-container">
              <p>
                "My mission is to align your surroundings with cosmic vibrations, 
                unlocking a life of abundance and health."
              </p>
            </div>

            <div className="cta-action-area">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRedirect} 
                className="btn-connect-premium"
              >
                <span>Book a Consultation</span>
                <ExternalLink size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetAcharya;