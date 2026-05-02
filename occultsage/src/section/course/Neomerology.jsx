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

const Numerology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "35+ Modules",
    "Number Logic System",
    "Lifetime Access",
    "Practical Case Studies",
  ];

  const benefits = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Certified Course",
      desc: "Industry recognized certification",
    },
    {
      icon: <Zap size={22} />,
      title: "Practical Remedies",
      desc: "Real-life applicable solutions",
    },
    {
      icon: <Users size={22} />,
      title: "10,000+ Students",
      desc: "Growing learning community",
    },
  ];

  return (
    <div className="premium-wrapper">

      
      <section className="hero-card">

        
        <div className="hero-left">
          <div className="hero-glass">

            <span className="badge">TRENDING</span>

            <h2 className="course-tag">NUMEROLOGY</h2>

            <div className="image-box">
              <img src="/Neomerology.png" alt="Numerology Expert" />
            </div>

            <p className="cert">ADVANCED SERIES</p>

          </div>
        </div>

        
        <div className="hero-right">

          <div className="top-row">
            <span className="verified">CERTIFIED COURSE</span>

            <div className="rating">
              <Star size={14} fill="#84cc16" color="#84cc16" />
              <span>4.8 (900+)</span>
            </div>
          </div>

          <h1 className="title">
            Numerology Mastery <span>Beginner to Advanced</span>
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
            <h2>₹14,999</h2>
            <span className="discount">25% OFF</span>
            <p>Certification + Bonus Included</p>
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
          <p className="sub">LEARN NUMBERS SCIENCE</p>
          <h2>
            Decode Your <span>Life Through Numbers</span>
          </h2>
        </div>

        <div className="video-layout">

          <div className="video-box">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Numerology Preview"
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

export default Numerology;