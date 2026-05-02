import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import './Blogs.css';

const coursesData = [
  { id: 1, name: 'Numerology Mastery', img: '/Neomerologyy.png', tag: 'Bestseller', path: '/course/numerology' },
  { id: 2, name: 'Vedic Astrology', img: '/astrologyvedic.jpg', tag: 'Expert', path: '/course/astrologyvedic' },
  { id: 3, name: 'Astro + Vastu Combo', img: '/astrovastu.jpg', tag: 'Combo', path: '/course/astrologyvastucombo' },
  { id: 4, name: 'Palmistry Science', img: '/Palmistry.jpg', tag: 'New', path: '/course/palmistry' },
  { id: 5, name: 'Face Reading Pro', img: '/facereading.jpg', tag: 'Special', path: '/course/facereading' },
  { id: 6, name: 'Watch Reading', img: '/watechreading.jpg', tag: 'Unique', path: '/course/watchreading' },
  { id: 7, name: 'Motion Reading', img: '/motionreading.jpg', tag: 'Mastery', path: '/course/motionreading' },
  { id: 8, name: 'Tarot Card', img: '/Tarotcard.jpg', tag: 'Diploma', path: '/course/tarotcard' },
];

const Blogs = () => {
  const navigate = useNavigate(); 

  return (
    <section className="courses-section">
      <div className="section-title-box">
        <span className="theme-green-text">EXPLORE MODULES</span>
        <h2 className="theme-navy-title">Our <span className="white-text">Elite Courses</span></h2>
      </div>

      <div className="courses-grid-8">
        {coursesData.map((course, index) => (
          <motion.div 
            key={course.id}
            className="split-course-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(course.path)} 
          >
          
            <div className="card-image-wrapper">
              <img src={course.img} alt={course.name} className="course-thumb" />
              <div className="tag-overlay">{course.tag}</div>
              <div className="green-gradient-overlay"></div>
            </div>

           
            <div className="card-content-area">
              <div className="rating-row">
                <Star size={12} fill="#84cc16" color="#84cc16" />
                <span>4.9 Mastery</span>
              </div>
              <h3 className="course-card-name">{course.name}</h3>
              <p className="course-card-p">Comprehensive guide from basic to advanced levels with live case studies.</p>
              
              <motion.button 
                whileHover={{ gap: '12px' }}
                className="enroll-btn-theme"
                onClick={(e) => {
                  e.stopPropagation(); 
                  navigate(course.path);
                }}
              >
                ENROLL NOW <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;