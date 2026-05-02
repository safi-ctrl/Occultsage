import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, Layout, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./Hero.css";


import heroImg from "../../assets/hero.png"; 
const ApankajImg = "/newpankaj.png";
const acharyanew = "/Acharayanew.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-wrapper">
      <Swiper
        effect={"fade"}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="hero-main-swiper"
      >
        
        
        <SwiperSlide>
          <div className="hero-container">
            <div className="hero-text-content">
              <span className="hero-badge">✦ Expert Vastu & Astrology Guidance</span>
              <h1>A Deeper Understanding <br />of Your <span className="light-text">Life Begins Here</span></h1>
              <p>Refined Vedic insights designed to guide your decisions. Transform your space and destiny with scientific Vastu solutions.</p>
              <div className="hero-action-btns">
                <button className="btn-primary-hero" onClick={() => navigate("/all-certifications")}>Explore Courses <BookOpen size={20} /></button>
                <button className="btn-secondary-hero" onClick={() => navigate("/consultancy")}>Book Consultant <ArrowRight size={20} /></button>
              </div>
              <div className="hero-trust-info"><p>Trusted by 50,000+ Clients Globally</p></div>
            </div>

            <div className="hero-visual-area">
              <div className="chakra-bg-wrapper">
                <div className="vastu-chakra-bg"></div>
                <div className="acharya-image-container">
                   <img src={heroImg} alt="Acharya Pankaj" className="main-hero-img" />
                   <div className="floating-info-card card-top"><strong>21 Lakhs+</strong><span>Consultations</span></div>
                   <div className="floating-info-card card-mid"><strong>15+ Years</strong><span>Experience</span></div>
                   <div className="floating-info-card card-bottom"><strong>98% Positive</strong><span>Feedback</span></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className="hero-container">
            <div className="hero-text-content">
              <span className="hero-badge">✦ Premium Astro-Vastu Consultancy</span>
              <h2>Scientific Remedies <br/>for <span className="light-text">Modern Success</span></h2>
              <p>Refined Vedic insights designed to guide your decisions. Transform your space and destiny with scientific Vastu solutions.</p>
              <div className="hero-action-btns">
                <button className="btn-primary-hero" onClick={() => navigate("/consultancy")}>Book Consultant <ArrowRight size={20} /></button>
                <button className="btn-secondary-hero" onClick={() => navigate("/all-certifications")}>Explore Courses <BookOpen size={20} /></button>
              </div>
              <div className="hero-trust-info"><p>Trusted by 50,000+ Clients Globally</p></div>
            </div>

            <div className="hero-visual-area">
              <div className="chakra-bg-wrapper">
                <div className="vastu-chakra-bg"></div>
                <div className="acharya-image-container">
                   <img src={ApankajImg} alt="Acharya Pankaj Special" className="main-hero-img" />
                   <div className="floating-info-card card-top"><strong>Industrial</strong><span>Vastu Expert</span></div>
                   <div className="floating-info-card card-mid"><strong>1-on-1</strong><span>Private Session</span></div>
                   <div className="floating-info-card card-bottom"><strong>100%</strong><span>Confidential</span></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className="hero-container">
            <div className="hero-text-content">
              <span className="hero-badge">✦ Professional Certified Courses</span>
              <h2>Master the Art of <br/><span className="light-text">Predictive Science</span></h2>
              <p>Refined Vedic insights designed to guide your decisions. Transform your space and destiny with scientific Vastu solutions.</p>
              <div className="hero-action-btns">
                <button className="btn-primary-hero" onClick={() => navigate("/all-certifications")}>Explore Courses <BookOpen size={20} /></button>
                <button className="btn-secondary-hero" onClick={() => navigate("/consultancy")}>Book Consultant <ArrowRight size={20} /></button>
              </div>
              <div className="hero-trust-info"><p>Trusted by 50,000+ Clients Globally</p></div>
            </div>

            <div className="hero-visual-area">
              <div className="chakra-bg-wrapper">
                <div className="vastu-chakra-bg"></div>
                <div className="acharya-image-container">
                   <img src={acharyanew} alt="Acharya Pankaj Academy" className="main-hero-img" />
                   <div className="floating-info-card card-top"><strong>Live</strong><span>Online Classes</span></div>
                   <div className="floating-info-card card-mid"><strong>ISO</strong><span>Certified Course</span></div>
                   <div className="floating-info-card card-bottom"><strong>10k+</strong><span>Students Taught</span></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Hero;