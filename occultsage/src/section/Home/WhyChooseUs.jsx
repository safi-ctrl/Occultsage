import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Practical Learning",
      desc: "Go beyond books. Understand real-life applications of Astrology & Vastu through live case studies.",
      icon: "🎓"
    },
    {
      title: "Expert Guidance",
      desc: "Learn directly from Acharya Pankaj, a master with 15+ years of experience in Vedic sciences.",
      icon: "⚖️"
    },
    {
      title: "Lifetime Support",
      desc: "Get continuous mentorship and guidance even after your course completion. We grow together.",
      icon: "♾️"
    },
    {
      title: "Easy to Understand",
      desc: "Complex Vedic concepts simplified into easy-to-grasp modules for beginners to experts.",
      icon: "✨"
    }
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-header">
          <h2 className="why-title">Why Choose <span>OccultSage?</span></h2>
          <p className="why-subtitle">Empowering your journey with authentic Vedic wisdom and professional mentorship.</p>
          <div className="title-glow"></div>
        </div>

        <div className="why-grid">
          {features.map((f, i) => (
            <div className="why-card" key={i}>
              <div className="icon-box">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <div className="card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;