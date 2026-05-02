import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowUpRight, Users, ArrowRight } from 'lucide-react';
import './Courses.css';

const Courses = () => {
  const navigate = useNavigate();

  const coursesData = [
    { id: 1, name: 'Numerology Mastery', img: '/Neomerologyy.png', tag: 'Bestseller', path: '/course/numerology', students: '1240' },
    { id: 2, name: 'Vedic Astrology', img: '/astrologyvedic.jpg', tag: 'Expert', path: '/course/astrologyvedic', students: '850' },
    { id: 3, name: 'Astro + Vastu Combo', img: '/astrovastu.jpg', tag: 'Combo', path: '/course/astrologyvastucombo', students: '2100' },
    { id: 4, name: 'Palmistry Science', img: '/Palmistry.jpg', tag: 'New', path: '/course/palmistry', students: '540' },
    { id: 5, name: 'Watch Reading', img: '/watechreading.jpg', tag: 'Professional', path: '/course/watchreading', students: '980' },
    { id: 6, name: 'Tarot Card Secrets', img: '/Tarotcard.jpg', tag: 'Popular', path: '/course/tarotcard', students: '720' },
    { id: 7, name: 'Face Reading', img: '/facereading.jpg', tag: 'Elite', path: '/course/facereading', students: '430' },
    { id: 8, name: 'Motion Reading', img: '/motionreading.jpg', tag: 'Advanced', path: '/course/motionreading', students: '610' },
  ];

  return (
    <section className="courses-section-wrapper">
      <div className="container">
        
        {/* Header Section */}
        <div className="header-flex-container">
          <div className="title-stack">
            <span className="badge-text">TRANSFORM YOUR LIFE</span>
            <h2 className="elite-title">Explore Our <span className="gold-text">Elite Courses</span></h2>
          </div>
          
          <motion.button 
            whileHover={{ x: 5 }}
            className="view-all-redirect-btn" 
            onClick={() => navigate('/ExploreCourses')}
          >
            View All Courses <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Courses Container */}
        <div className="courses-scroll-container">
          <div className="courses-responsive-grid">
            {coursesData.map((course, index) => (
              <motion.div 
                key={course.id}
                className="premium-split-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => navigate(course.path)}
              >
                <div className="card-top-visual">
                  <img src={course.img} alt={course.name} />
                  <div className="floating-tag">{course.tag}</div>
                  <div className="hover-overlay">
                    <ArrowUpRight color="white" size={32} />
                  </div>
                </div>

                <div className="card-details-box">
                  <div className="meta-info">
                    <span className="seats-left">LIMITED SEATS</span>
                    <span className="user-stats"><Users size={14} /> {course.students}</span>
                  </div>
                  
                  <h3 className="course-name-text">{course.name}</h3>
                  <p className="course-desc-text">Master the divine sciences with live case studies and mentorship.</p>
                  
                  <div className="card-action-footer">
                    <span className="rating-stars">★★★★★</span>
                    <button 
                      className="enroll-btn-pro"
                      onClick={(e) => {
                        e.stopPropagation(); 
                        navigate(course.path);
                      }}
                    >
                      Enroll Now <ArrowRight size={16} className="btn-icon" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;