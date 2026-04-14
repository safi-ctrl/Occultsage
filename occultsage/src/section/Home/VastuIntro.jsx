import React from 'react';
import './VastuIntro.css';

const VastuIntro = () => {
  return (
    <section className="vastu-intro-section">
     
      <div className="vastu-bg-watermark"></div>

      <div className="vastu-intro-container">
        
       
        <div className="vastu-content">
          <h2 className="vastu-title">The Science of Vastu Shastra</h2>
          <div className="title-underline"></div>
          
          <ul className="vastu-points">
            <li>
              <strong>Panchtatva Balance:</strong> Ancient Indian science that balances Earth, Water, Fire, Air, and Space for a harmonious environment.
            </li>
            <li>
              <strong>Energy Alignment:</strong> Every space has an energy field. Aligning it invites positive vibrations for health and prosperity.
            </li>
            <li>
              <strong>Prana Flow:</strong> It's about the 'Life Force'. Correcting imbalances removes career obstacles and family disputes.
            </li>
            <li>
              <strong>Modern Bridge:</strong> Acting as a bridge between traditional wisdom and contemporary lifestyle for mental peace.
            </li>
            <li>
              <strong>Expert Guidance:</strong> Acharya Pankaj transforms your surroundings into a sanctuary of positive energy.
            </li>
          </ul>
        </div>

        
        <div className="vastu-visual">
          <div className="monitor-frame">
            <div className="screen">
              <img src="/vastu-blueprint.png" alt="Vastu Design" />
              <div className="reflection"></div>
            </div>
            <div className="monitor-stand-neck"></div>
            <div className="monitor-stand-base"></div>
          </div>
        </div>

      </div>

      
      <div className="booking-bar-wrapper">
        <div className="booking-bar">
          <div className="whatsapp-icon-circle">
            
            <img src="/acharyaji.jpeg" alt="Acharya Pankaj" />
          </div>
          <div className="booking-text">
            <span>Book An Appointment Here</span>
            <a href="tel:+919999097600">+91 - 9999097600</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VastuIntro;