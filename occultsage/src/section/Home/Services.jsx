import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import './Services.css';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const navigate = useNavigate(); 

  const services = [
    { title: 'Astrology', img: '/astrology.jpg', desc: 'Get more profound insights into your life with the help of expert scientific astrology.' },
    { title: 'Vastu', img: '/vastuu.jpg', desc: 'Enhance your surroundings for success and peace with expert Vastu guidance.' },
    { title: 'Career', img: '/Career.jpeg', desc: "Navigate life's path with clarity. Unlock potential through expert guidance." },
    { title: 'Vastu Product', img: '/vastuProduct.jpeg', desc: 'Authentic Vastu products to bring positive energy and prosperity to your space.' },
    { title: 'Courses', img: '/Courses.jpeg', desc: 'Learn the ancient science of Vastu and Astrology with our professional courses.' },
    { title: 'Numerology', img: '/neomerology.jpg', desc: 'Decoding numbers to align your destiny with cosmic vibrations.' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setItemsToShow(1);
      else if (window.innerWidth <= 1024) setItemsToShow(2);
      else setItemsToShow(4);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= services.length - itemsToShow ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - itemsToShow : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, itemsToShow]);

  
  const handleConsultClick = () => {
    navigate('/consultancy');
  };

  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-subtitle">How we can help you</span>
        <h2 className="services-title">Our Services</h2>
        <div className="accent-divider"></div>
        <p className="services-desc">Turn doubts into direction with expert help for your business, marriage, vastu, or health.</p>
      </div>

      <div className="carousel-main-container">
        <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous">
          <ChevronLeft size={28} />
        </button>
        <button className="nav-btn next" onClick={nextSlide} aria-label="Next">
          <ChevronRight size={28} />
        </button>

        <div className="carousel-view-window">
          <div 
            className="carousel-scroller" 
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {services.map((item, index) => (
              <div 
                className="service-card-wrapper" 
                key={index} 
                style={{ flex: `0 0 ${100 / itemsToShow}%` }}
              >
                <div className="professional-service-card">
                  <div className="image-container-modern">
                    <img src={item.img} alt={item.title} className="service-img" />
                    <div className="img-overlay"></div>
                    <div className="service-badge">{item.title.split(' ')[0]}</div>
                  </div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('/consultancy'); }} className="service-more-btn">
                      Explore More <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="action-footer">
        
        <button className="master-action-btn" onClick={handleConsultClick}>
          Consult Acharya Pankaj
        </button>
      </div>
    </section>
  );
};

export default Services;