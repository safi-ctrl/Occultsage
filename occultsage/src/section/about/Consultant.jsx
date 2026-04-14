import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react'; 
import './consultant.css';

const Consultant = () => {
  return (
    <section className="expert-section">
      <div className="expert-container">
        
        
        <motion.div 
          className="expert-image-area"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="main-photo-wrapper">
            <img 
              src="/Consultant.jpeg" 
              alt="Acharya Pankaj" 
              className="expert-main-photo" 
            />
           
            <div className="diamond-frame left-diamond">
              <img src="/swastik.jpg" alt="Vastu Symbol" className="diamond-img" />
            </div>
            <div className="diamond-frame right-diamond">
              <img src="/compass.jpg" alt="Vastu Compass" className="diamond-img" />
            </div>
          </div>
        </motion.div>

        
        <motion.div 
          className="expert-content-area"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="expert-subtitle">Vastu Expert & Pioneer</span>
          <h2 className="expert-title">Know Our Expert</h2>
          <div className="title-underline"></div>
          
          <p className="expert-intro">
            <strong>Acharya Pankaj</strong> is a pioneer in the field of Occult Sciences, globally recognized as a <span className="highlight-text">Senior Vastu Consultant</span> with over 15+ years of profound experience.
          </p>

          <div className="expert-main-text">
            <p>
              With a track record of transforming thousands of residential and commercial spaces, Acharya Pankaj specializes in <strong>"No-Demolition"</strong> Vastu solutions. He has mastered the intricate balance between Five Elements (Panchbhoota).
            </p>
            <p>
              His mission is to remove myths surrounding Vastu Shastra and provide scientific, result-oriented guidance that brings immediate positive shifts in health, wealth, and prosperity.
            </p>
          </div>

          <div className="expert-specialization">
            <h4>Specialized Vedic Techniques:</h4>
            <ul className="expert-points">
              <li><CheckCircle2 className="point-icon" /> Scientific Vastu Analysis for Homes & Offices.</li>
              <li><CheckCircle2 className="point-icon" /> Advanced Remedial Vastu (No Structural Changes).</li>
              <li><CheckCircle2 className="point-icon" /> Strategic Astro-Vastu mapping for cosmic alignment.</li>
            </ul>
          </div>

          <button className="expert-cta-btn">
            Connect with Acharya Pankaj
          </button>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Consultant;