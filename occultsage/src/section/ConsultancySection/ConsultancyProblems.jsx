import React from 'react';
import { motion } from 'framer-motion';
import { Banknote, HeartPulse, Building2, Infinity, ArrowRight } from 'lucide-react';
import './Consultancyproblem.css';

const consultancyData = [
  {
    icon: <Banknote size={24} />,
    title: "Financial Wealth & Prosperity",
    desc: "Remove energetic blocks and align your space to attract sustainable abundance and growth.",
    
    img: "https://picsum.photos/seed/vastuwealth/600/400" 
  },
  {
    icon: <HeartPulse size={24} />,
    title: "Family Vitality & Wellness",
    desc: "Balance the five elements to ensure robust physical health and mental peace for your loved ones.",
    
    img: "https://picsum.photos/seed/vastuhealth/600/400"
  },
  {
    icon: <Building2 size={24} />,
    title: "Professional & Business Growth",
    desc: "Strategically design your workspace to boost productivity, leadership focus, and business leads.",
    
    img: "https://picsum.photos/seed/vastuoffice/600/400"
  },
  {
    icon: <Infinity size={24} />,
    title: "Relationship & Marital Harmony",
    desc: "Foster deeper emotional bonding and intimacy through expert energy balancing techniques.",
    
    img: "https://picsum.photos/seed/vasturelationship/600/400"
  }
];

const ConsultancyProblems = () => {
  return (
    <section className="consultancy-section">
      <div className="section-header-modern">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="kicker"
          viewport={{ once: true }}
        >
          Expert Vastu Solutions
        </motion.span>
        <h2>Consultancy <span className="highlight">Modules</span></h2>
        <div className="title-underline"></div>
      </div>

      <div className="consultancy-grid-premium">
        {consultancyData.map((item, index) => (
          <motion.div 
            key={index}
            className="modern-glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="card-media">
              <img src={item.img} alt={item.title} className="bg-image" />
              <div className="dark-gradient-overlay"></div>
            </div>

            <div className="card-overlay-content">
              <div className="icon-badge-modern">
                {item.icon}
              </div>
              
              <div className="text-content">
                <h3>{item.title}</h3>
                <p className="description-text">{item.desc}</p>
                <motion.div 
                  className="action-link-luxury"
                  whileHover={{ x: 8 }}
                >
                  Explore Module <ArrowRight size={16} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ConsultancyProblems;