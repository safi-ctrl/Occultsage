import React, { useEffect } from "react";
import {
  Star,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Users,
} from "lucide-react";
import "../../Styles/Courses.css"; 

const AstrologyVedic = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    "Vedic Astrology Fundamentals",
    "KP System Precision",
    "Nadi Astrology Techniques",
    "Real Chart Predictions",
  ];

  const benefits = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Certified Astrology Training",
      desc: "Internationally recognized certification with practical knowledge.",
    },
    {
      icon: <Zap size={22} />,
      title: "Accurate Prediction Skills",
      desc: "Learn advanced techniques for precise timing & predictions.",
    },
    {
      icon: <Users size={22} />,
      title: "Consultant Level Training",
      desc: "Become a professional astrologer and start consultations.",
    },
  ];

  return (
    <main className="premium-wrapper">

      
      <section className="hero-card">

        
        <div className="hero-left">
          <div className="hero-glass">

            <span className="badge">BEST SELLER</span>

            <h2 className="course-tag">ASTROLOGY</h2>

            <div className="image-box">
              <img src="/Astrovedic.png" alt="Astrology Course" />
            </div>

            <p className="cert">VEDIC + KP + NADI</p>

          </div>
        </div>

        
        <div className="hero-right">

          <div className="top-row">
            <span className="verified">PRO CERTIFIED</span>

            <div className="rating">
              <Star size={14} fill="#84cc16" color="#84cc16" />
              <span>4.8 (120+ Students)</span>
            </div>
          </div>

          <h1 className="title">
            Astrology Masterclass <span>Basic to Pro</span>
          </h1>

          <p className="subtitle">
            Master Vedic, KP, and Nadi astrology systems to make highly accurate
            life predictions and build a professional astrology career.
          </p>

          <div className="features">
            {features.map((item, index) => (
              <div className="feature-item" key={index}>
                <CheckCircle2 size={16} className="icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="price-box">
            <h2>₹24,999</h2>
            <span className="discount">30% OFF - Limited Time</span>
            <p>Includes Consultant Training + Case Studies</p>
          </div>

          <div className="btn-group">
            <button className="outline">View Syllabus</button>

            <button className="primary">
              Enroll Now <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      
      <section className="video-section">

        <div className="heading">
          <p className="sub">COURSE PREVIEW</p>
          <h2>
            Scientific Predictive <span>Astrology</span>
          </h2>
        </div>

        <div className="video-layout">

          
          <div className="video-box">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Astrology Course Preview"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          
          <div className="benefits">
            {benefits.map((item, index) => (
              <div className="card" key={index}>

                <div className="icon-box">
                  {item.icon}
                </div>

                <div className="text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default AstrologyVedic;