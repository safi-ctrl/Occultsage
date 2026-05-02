import React from "react";
import { motion } from "framer-motion";
import { Compass, ShieldCheck, Home, Users } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import "./aboutintro.css";

const AboutIntro = () => {
  const navigate = useNavigate(); 

  const features = [
    {
      title: "Ancient Wisdom",
      description: "Authentic Vastu principles adapted for modern architectural needs.",
      icon: <Compass size={32} />,
    },
    {
      title: "Complete Privacy",
      description: "Your home and office energy maps are kept strictly confidential.",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Tailored Spaces",
      description: "Customized remedies that blend seamlessly with your interior decor.",
      icon: <Home size={32} />,
    },
    {
      title: "Expert Guidance",
      description: "Continuous support to help you manifest balance and prosperity.",
      icon: <Users size={32} />,
    },
  ];

  return (
    <div className="vastu-container">
      
      <section className="vastu-hero">
        <div className="hero-overlay">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="tagline">Premium Vastu Consultancy</span>
            <h1>Harmonizing Spaces, <br /><span>Transforming Lives</span></h1>
            <p>
              Experience the perfect blend of Vedic tradition and modern aesthetics. 
              We help you create environments that invite positive energy and success.
            </p>
            <div className="hero-btns">
              <button 
                className="btn-primary" 
                onClick={() => navigate("/ExploreCourses")}
              >
                Our Services
              </button>
              
              
              <button 
                className="btn-outline" 
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="features-section">
        <div className="wrapper">
          <div className="section-title">
            <p>Why Choose Our Expertise</p>
            <h2>Guided by Principles, Driven by Results</h2>
            <div className="line"></div>
          </div>

          <div className="features-grid">
            {features.map((item, index) => (
              <motion.div 
                key={index} 
                className="feature-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutIntro;