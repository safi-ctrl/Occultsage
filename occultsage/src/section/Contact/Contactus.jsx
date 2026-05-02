import React, { useState } from 'react';
import './Contactus.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    phone: '', 
    course: '', 
    degree: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    "Professional Astrology Course", "Mastery in Numerology",
    "Tarot Card Reading Mastery", "Astro+VastuCombo",
    "Palmistry Certification", "Motion reading",
    "Face Reading", "Watch reading","vedic Astrology",
    "🔮 Book a Consultation"
  ];

  const degrees = [
    "10th/12th Pass", "Graduate", "Post Graduate", "PhD / Doctorate", "Other Professional Course"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL";

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      alert("Success! Message sent to OccultSage.");
      setFormData({ name: '', email: '', phone: '', course: '', degree: '', message: '' }); 
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="occult-contact-wrapper">
      <div className="contact-card">
        {/* Left Sidebar */}
        <div className="contact-sidebar">
          <div className="sidebar-content">
            <h2 className="brand-logo">OccultSage</h2>
            <p className="tagline">Unlock the secrets of the Universe.</p>
            
            <div className="info-list">
              <div className="info-item">
                <span className="icon">📧</span>
                <div>
                  <p className="info-label">Email Us</p>
                  <p className="info-text">contact@occultsage.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">💬</span>
                <div>
                  <p className="info-label">WhatsApp</p>
                  <p className="info-text">+91 98719 90719</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-footer">
            <p>Join 10k+ seekers community.</p>
          </div>
        </div>

        {/* Right Form Container */}
        <div className="form-container">
          <div className="form-header">
            <h1 className="form-title">Start Your Journey</h1>
            <div className="title-underline"></div>
            <p className="form-subtitle">Fill out the details below to connect with us.</p>
          </div>

          <form className="occult-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>WhatsApp Number</label>
                <input type="tel" name="phone" placeholder="+91..." value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="name@email.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Qualification</label>
                <select name="degree" value={formData.degree} onChange={handleChange} required>
                  <option value="">Select Qualification</option>
                  {degrees.map((d, i) => <option key={i} value={d}>{d}</option>)}
                </select>
              </div>
              <div className="input-group">
                <label>Course/Consultancy</label>
                <select name="course" value={formData.course} onChange={handleChange} required>
                  <option value="">Select Option</option>
                  {courses.map((c, i) => <option key={i} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea name="message" rows="3" placeholder="How can we guide you?" value={formData.message} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="occult-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Connect Now →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;