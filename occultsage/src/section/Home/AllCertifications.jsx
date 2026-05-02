import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Clock, ArrowRight, Award } from 'lucide-react';
import './AllCertifications.css';

const AllCertifications = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    { id: 1, name: 'Numerology Mastery', img: '/Neomerologyy.png', tag: 'Bestseller', path: '/course/numerology', students: '1.2k', duration: '40h' },
    { id: 2, name: 'Vedic Astrology', img: '/astrologyvedic.jpg', tag: 'Expert', path: '/course/astrologyvedic', students: '850', duration: '60h' },
    { id: 3, name: 'Astro-Vastu Combo', img: '/astrovastu.jpg', tag: 'Combo', path: '/course/astrologyvastucombo', students: '2.1k', duration: '120h' },
    { id: 4, name: 'Palmistry Science', img: '/Palmistry.jpg', tag: 'New', path: '/course/palmistry', students: '540', duration: '45h' },
    { id: 5, name: 'Watch Reading', img: '/watechreading.jpg', tag: 'Special', path: '/course/watchreading', students: '980', duration: '20h' },
    { id: 6, name: 'Tarot Card Secrets', img: '/Tarotcard.jpg', tag: 'Popular', path: '/course/tarotcard', students: '720', duration: '30h' },
    { id: 7, name: 'Face Reading Pro', img: '/facereading.jpg', tag: 'Elite', path: '/course/facereading', students: '430', duration: '25h' },
    { id: 8, name: 'Motion Reading', img: '/motionreading.jpg', tag: 'Advanced', path: '/course/motionreading', students: '610', duration: '20h' },
  ];

  return (
    <div className="cert-page-wrapper">
      <header className="cert-header">
        <span className="cert-badge">Premium Learning</span>
        <h1>Our Professional <span className="gold-text">Certifications</span></h1>
        <p>Unlock the secrets of occult sciences with our expert-led programs.</p>
      </header>

      <div className="cert-grid">
        {courses.map((course) => (
          <div key={course.id} className="cert-card" onClick={() => navigate(course.path)}>
            <div className="cert-img-box">
              <img src={course.img} alt={course.name} loading="lazy" />
              <div className="cert-tag">{course.tag}</div>
            </div>
            
            <div className="cert-content">
              <div className="cert-meta">
                <span><Star size={14} fill="#f9e295" color="#f9e295" /> 5.0</span>
                <span><Users size={14} /> {course.students}</span>
                <span><Clock size={14} /> {course.duration}</span>
              </div>
              <h3>{course.name}</h3>
              <div className="cert-footer">
                <span className="cert-type"><Award size={14} /> Diploma</span>
                <button className="cert-btn">
                  Explore <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCertifications;