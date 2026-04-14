import React, { useState } from 'react';
import './Contactus.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    "Professional Astrology Course",
    "Mastery in Numerology",
    "Tarot Card Reading Mastery",
    "Vastu Shastra Professional",
    "Palmistry Certification",
    "Reiki Healing Level 1 & 2",
    "Vedic Astrology Deep Dive",
    "Crystal Healing Course",
    "🔮 Book a 1-on-1 Consultation"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbypab412XBBPTu1PZA3wriUlQEAJMFupLtxGYhEXd8rSV_HWs5dP_p4oHZOLqoyWIf8/exec";

    try {
     
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

     
      alert("Success! Your message has been sent to OccultSage.");
      
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      e.target.reset(); 

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="occult-contact-wrapper">
      <div className="contact-card">
        
        <div className="contact-sidebar">
          <div className="sidebar-content">
            <h2 className="brand-logo">OccultSage</h2>
            <p className="tagline italic">Unlock the secrets of the Universe.</p>
            
            <div className="info-list">
              <div className="info-item">
                <span className="icon">📧</span>
                <p>contact@occultsage.com</p>
              </div>
              <div className="info-item">
                <span className="icon">💬</span>
                <p>+91 98765 43210</p>
              </div>
              <div className="info-item">
                <span className="icon">📍</span>
                <p>Global Online Consultation</p>
              </div>
            </div>
          </div>
          <div className="sidebar-footer">
            <p>Join our 10k+ spiritual seekers community.</p>
          </div>
        </div>

        
        <div className="form-container">
          <h1 className="form-title">Start Your Journey</h1>
          <p className="form-subtitle">Fill in the details below to master the ancient arts.</p>
          
          <form className="occult-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="e.g. Aryan Sharma" 
                value={formData.name}
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>WhatsApp Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+91 XXXX-XXXXXX" 
                  value={formData.phone}
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="name@example.com" 
                  value={formData.email}
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="input-group">
              <label>Choose Course or Consultation</label>
              <select name="course" value={formData.course} onChange={handleChange} required>
                <option value="">Select an option</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>Your Message</label>
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Tell us how we can help you..." 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="occult-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending Details..." : "Connect with OccultSage"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;