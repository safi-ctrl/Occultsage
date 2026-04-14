import React from 'react';
import './testimonials.css';
import { Quote } from 'lucide-react'; 

const reviews = [
  { id: 1, name: "Rahul Deshmukh", course: "Advance Vastu Course", review: "Sir ki vajah se ghar ka map khud design karna seekh liya. Best guidance!", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sneha Kapoor", course: "Vedic Astrology", review: "Life-changing course! Concepts ab bohot clear hain. Occultsage is the best.", img: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "Amit Verma", course: "Industrial Vastu", review: "Factory Vastu ke tips kamaal ke hain. Practical knowledge mili hai.", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Dr. Kavita Rao", course: "Numerology & Vastu", review: "Calculation seekhne ka sabse aasaan tareeka yahan mila. Dhanyawad!", img: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Vikram Singh", course: "Remedial Vastu", review: "Bina tod-fod wali remedies ne mere clients ko bohot help kiya. Amazing!", img: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 6, name: "Pooja Sharma", course: "Tarot Reading", review: "Professional Tarot reader banne ka sapna yahan poora hua. Highly recommend.", img: "https://randomuser.me/api/portraits/women/6.jpg" },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-tag">Testimonials</span>
          <h2 className="section-title">What Our Students Say</h2>
          <div className="title-bar"></div>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="card-wrapper">
              <div className="main-card">
                
                <div className="quote-icon-box">
                  <Quote size={24} fill="#6da41d" stroke="none" />
                </div>
                
                <p className="review-quote">{review.review}</p>
                
                <div className="user-profile">
                  <div className="image-holder">
                    <img src={review.img} alt={review.name} />
                  </div>
                  <div className="user-info">
                    <h3 className="name-text">{review.name}</h3>
                    <p className="course-text">{review.course}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;