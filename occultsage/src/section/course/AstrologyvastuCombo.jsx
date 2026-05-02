import React, { useEffect } from "react";
import {
  Star,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Globe,
  Clock,
  PlayCircle
} from "lucide-react";
import "../../Styles/Courses.css";

const AstrologyvastuCombo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    "Predictive Astrology Mastery",
    "Professional Vastu Shastra",
    "Remedial Science Secrets",
    "100+ Practical Case Studies",
  ];

  const benefits = [
    {
      icon: <Zap size={22} />,
      title: "Double Income Potential",
      desc: "Scale your business by offering dual expertise in both Astrology & Vastu.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Deep Root Analysis",
      desc: "Identify if the block is in the Birth Chart or the Living Space with precision.",
    },
    {
      icon: <Award size={22} />,
      title: "Dual Certification",
      desc: "Get certified in both domains under the guidance of Acharya Pankaj Ji.",
    },
  ];

  return (
    <main className="premium-wrapper">

      
      <section className="hero-card">

        
        <div className="hero-left">
          <div className="hero-glass">
            <span className="badge">MEGA COMBO OFFER</span>
            <h2 className="course-tag">COMBO</h2>
            
            <div className="image-box">
              
              <img src="/Astrovastu.png" alt="Astrology & Vastu Combo" />
            </div>

            <p className="cert">PROFESSIONAL DUAL CERTIFICATION</p>
          </div>
        </div>

        
        <div className="hero-right">
          <div className="top-row">
            <span className="verified">HOLISTIC EXPERT PATH</span>
            <div className="rating">
              <Star size={14} fill="#84cc16" color="#84cc16" />
              <span>4.9 (250+ Success Stories)</span>
            </div>
          </div>

          <h1 className="title">
            Astrology & Vastu <span>Ultimate Divine Combo</span>
          </h1>

          <p className="subtitle">
            Become a complete spiritual consultant. Learn to align space energy with 
            celestial logic to provide 360-degree life solutions for your clients.
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
            <div className="price-stack-combo" style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="old-val" style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '14px' }}>Value: ₹45,000</span>
                <h2 style={{ marginTop: '5px' }}>₹29,999 <span style={{ fontSize: '14px', color: '#84cc16' }}>(SAVE 33%)</span></h2>
            </div>
            <span className="discount">Limited Time Professional Deal</span>
            <p>Bonus: Commercial Vastu Checklist Included</p>
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
            Align Space & Time, <span>Change Destinies</span>
          </h2>
        </div>

        <div className="video-layout">
          
          <div className="video-box">
            <iframe
              src="https://www.youtube.com/embed/YOUR_COMBO_VIDEO_ID"
              title="Combo Masterclass Preview"
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

export default AstrologyvastuCombo;