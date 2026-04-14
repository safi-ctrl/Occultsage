import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 1. useNavigate import kiya
import "./Hero.css";
import heroImg from "../../assets/Hero.png"; 

const Hero = () => {
  const navigate = useNavigate(); // 2. Navigation hook initialize kiya

  return (
    <section className="hero-wrapper">
      
      <div className="gradient-blob"></div>
      
      <div className="hero-container">
        
        <motion.div 
          className="hero-text-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hero-badge">Expert Vastu & Astrology Guidance</span>
          <h1>
            Where <span className="accent-text">Ancient Wisdom</span> <br />
            Meets <span className="light-text">Modern Living</span>
          </h1>
          <p>
            Transform your space and destiny. Discover powerful Vastu solutions 
            designed to harmonize your surroundings and unlock your true potential 
            with scientific Vedic principles.
          </p>
          
          <div className="hero-action-btns">
            {/* 3. Explore Courses button par onClick add kiya */}
            <button 
              className="btn-primary-hero" 
              onClick={() => navigate("/ExploreCourses")}
            >
              ExploreCourses <BookOpen size={20} />
            </button>

            <button className="btn-secondary-hero">
              Book Consultant <ArrowRight size={20} />
            </button>
          </div>

          <div className="hero-trust-badges">
            <p>Trusted by 50000+ Clients Globally</p>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual-area"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="chakra-bg-wrapper">
            <div className="vastu-chakra-bg"></div>
            
            <div className="acharya-image-container">
               <img src={heroImg} alt="Acharya Pankaj" className="main-hero-img" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;