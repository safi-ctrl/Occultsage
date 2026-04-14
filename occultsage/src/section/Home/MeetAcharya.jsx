import React from 'react';
import './MeetAcharya.css';

const MeetAcharya = () => {
  return (
    <section className="meet-section">
      <div className="container acharya-card">
        
        <div className="acharya-image">
          <img src="./acharyaji.jpeg" alt="Acharya Pankaj" />
        </div>

        
        <div className="acharya-info">
          <div className="acharya-header">
            <h2>Meet Acharya Pankaj</h2>
            <h3>Your Trusted Vastu & Astrology Consultant</h3>
          </div>

          <div className="acharya-details-flex">
           
            <div className="acharya-points-col">
              <ul className="points-list">
                <li><span className="check-icon">✓</span> 15+ Years of Experience</li>
                <li><span className="check-icon">✓</span> Certified Vastu & Astrology Expert</li>
                <li><span className="check-icon">✓</span> Thousands of Satisfied Students</li>
              </ul>
              <a href="tel:+919999097600" className="book-consult-btn">
                Book a Consultation
              </a>
            </div>

           
            <div className="acharya-bio-col">
              <p>
                Nameste! I am Acharya Pankaj, your guide to harmonious and prosperous living. 
                With over 15 years of experience, I help clients align their spaces with the 
                ancient wisdom of Vastu, synced with their personal astrology. 
                Whether you're looking to enhance your home energy or professional success, 
                I am here to guide your path. Om!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetAcharya;