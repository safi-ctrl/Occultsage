import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Star, Clock, ArrowRight } from 'lucide-react';
import './ExploreCourses.css';

const ExploreCourses = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allCourses = [
    {
      id: 1,
      title: "Advanced Vedic Astrology Certification",
      category: "Astrology",
      rating: "4.9",
      students: "850+",
      duration: "60 Hours",
      price: "₹19,999",
      image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4c5?q=80&w=1000&auto=format&fit=crop", // Cosmic/Stars
      path: "/astrologyvedic"
    },
    {
      id: 2,
      title: "Tarot Card Reading Fundamentals",
      category: "Tarot",
      rating: "5.0",
      students: "1200+",
      duration: "30 Hours",
      price: "₹12,500",
      image: "https://images.unsplash.com/photo-1590130612142-b9e7ae76c8c4?q=80&w=1000&auto=format&fit=crop", // Tarot Cards
      path: "/tarotcard"
    },
    {
      id: 3,
      title: "Palmistry: The Art of Hand Analysis",
      category: "Palmistry",
      rating: "4.8",
      students: "500+",
      duration: "45 Hours",
      price: "₹9,999",
      image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1000&auto=format&fit=crop", // Palm/Hands
      path: "/palmistry"
    },
    {
      id: 4,
      title: "Professional Vastu Shastra Masterclass",
      category: "Vastu",
      rating: "4.9",
      students: "900+",
      duration: "55 Hours",
      price: "₹17,999",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop", // Architecture/Home
      path: "/astrologyvastucombo"
    },
    {
      id: 5,
      title: "Face Reading & Character Analysis",
      category: "Face Reading",
      rating: "4.7",
      students: "350+",
      duration: "25 Hours",
      price: "₹8,500",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop", // Human Face
      path: "/facereading"
    },
    {
      id: 6,
      title: "Watch Reading & Time Divination",
      category: "Watch Reading",
      rating: "4.6",
      students: "210+",
      duration: "20 Hours",
      price: "₹7,999",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop", // Vintage Watch
      path: "/watchreading"
    },
    {
      id: 7,
      title: "Astro-Vastu Professional Combo",
      category: "Combo",
      rating: "5.0",
      students: "1500+",
      duration: "120 Hours",
      price: "₹29,999",
      image: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=1000&auto=format&fit=crop", // Professional Astrology Study
      path: "/astrologyvastucombo"
    },
    {
      id: 8,
      title: "Numerology & Grid Science",
      category: "Numerology",
      rating: "4.8",
      students: "420+",
      duration: "40 Hours",
      price: "₹14,500",
      image: "https://images.unsplash.com/photo-1502033006960-a150c3917a17?q=80&w=1000&auto=format&fit=crop", // Abstract Numbers/Geometry
      path: "/numerology"
    }
  ];

  return (
    <div className="explore-courses-page">
      <section className="explore-header">
        <div className="header-container">
          <span className="breadcrumb">Home / Courses</span>
          <h1>Master the <span className="highlight">Occult Sciences</span></h1>
          <p>Join certified professional programs to transform your career in Astrology & Vedic Sciences.</p>
        </div>
      </section>

      <section className="courses-grid-section">
        <div className="courses-container">
          <div className="courses-main-grid">
            {allCourses.map((course) => (
              <div key={course.id} className="course-card-pro">
                <div className="course-image-wrapper">
                  <img src={course.image} alt={course.title} />
                  <span className="category-badge">{course.category}</span>
                </div>
                <div className="course-card-body">
                  <div className="course-meta">
                    <span className="rating"><Star size={14} fill="#FFB800" color="#FFB800" /> {course.rating}</span>
                    <span className="students"><BookOpen size={14} /> {course.students}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <div className="course-footer-meta">
                    <span><Clock size={14} /> {course.duration}</span>
                  </div>
                  <div className="course-price-action">
                    <span className="course-price">{course.price}</span>
                    <button className="enroll-btn-pro" onClick={() => navigate(course.path)}>
                      Join <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreCourses;