import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';


import 'swiper/css';
import 'swiper/css/navigation';
import './testimonials.css';

const reviews = [
  { id: 1, name: "Rahul Deshmukh", course: "Advance Vastu", review: "Sir ki vajah se ghar ka map khud design karna seekh liya. Best guidance!", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Sneha Kapoor", course: "Vedic Astrology", review: "Life-changing course! Concepts ab bohot clear hain. Occultsage is the best.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Amit Verma", course: "Industrial Vastu", review: "Factory Vastu ke tips kamaal ke hain. Practical knowledge mili hai.", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { id: 4, name: "Priya Sharma", course: "Marketing Director", review: "Real feedback from partners who have collaborated with us for years.", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 5, name: "Vikram Singh", course: "Numerology", review: "Calculation seekhne ka sabse aasaan tareeka yahan mila. Dhanyawad!", img: "https://randomuser.me/api/portraits/men/22.jpg" }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What <span className="gold-text">Our Partners</span> Say About Us</h2>
          <p className="section-subtitle">Real feedback from partners who have collaborated with Occultsage and experienced meaningful results</p>
        </div>

        <div className="slider-container">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3500 }}
            navigation={{
              nextEl: '.nav-btn-next',
              prevEl: '.nav-btn-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonial-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                {({ isActive }) => (
                  <div className={`testimonial-item ${isActive ? 'active' : 'inactive'}`}>
                    <div className="avatar-wrapper">
                      <img src={review.img} alt={review.name} className="avatar-img" />
                    </div>
                    {isActive && (
                      <div className="content-reveal">
                        <h3 className="user-name">{review.name}</h3>
                        <p className="user-role">{review.course}</p>
                        <p className="user-review">{review.review}</p>
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          
          <button className="nav-btn nav-btn-prev"><ChevronLeft size={20} /></button>
          <button className="nav-btn nav-btn-next"><ChevronRight size={20} /></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;