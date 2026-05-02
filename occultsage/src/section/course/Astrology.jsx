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

const Astrology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "40+ Modules",
    "Scientific Logic",
    "Lifetime Access",
    "Case Studies",
  ];

  const benefits = [
    {
      icon: <ShieldCheck size={22} />,
      title: "ISO Certified",
      desc: "Globally valid certification",
    },
    {
      icon: <Zap size={22} />,
      title: "Scientific Remedies",
      desc: "No demolition needed",
    },
    {
      icon: <Users size={22} />,
      title: "15,000+ Community",
      desc: "Strong student network",
    },
  ];

  return (
    <div className="premium-wrapper">

      
      <section className="hero-card">

        
        <div className="hero-left">
          <div className="hero-glass">

            <span className="badge">BEST SELLER</span>

            <h2 className="course-tag">VASTU SHASTRA</h2>

            <div className="image-box">
              <img src="/Acharyajii.png" alt="Acharya" />
            </div>

            <p className="cert">PROFESSIONAL SERIES</p>

          </div>
        </div>

        
        <div className="hero-right">

          
          <div className="top-row">
            <span className="verified">ISO CERTIFIED</span>

            <div className="rating">
              <Star size={14} fill="#84cc16" color="#84cc16" />
              <span>4.9 (1.2K+)</span>
            </div>
          </div>

          
          <h1 className="title">
            Vastu Masterclass <span>Basic to Pro</span>
          </h1>

          
          <div className="features">
            {features.map((item, index) => (
              <div className="feature-item" key={index}>
                <CheckCircle2 size={16} className="icon" />
                {item}
              </div>
            ))}
          </div>

          
          <div className="price-box">
            <h2>₹19,999</h2>
            <span className="discount">20% OFF</span>
            <p>Certificate + Community Included</p>
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
          <p className="sub">INSIDE THE ACADEMY</p>
          <h2>
            Experience the <span>Logic of Vastu</span>
          </h2>
        </div>

        
        <div className="video-layout">

          
          <div className="video-box">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Course Preview"
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

    </div>
  );
};

export default Astrology;