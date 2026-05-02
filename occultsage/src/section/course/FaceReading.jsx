import React, { useEffect } from "react";
import {
  Star,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Users,
  Scan,
  UserCircle,
  Focus,
  Eye
} from "lucide-react";
import "../../Styles/Courses.css";

const FaceReading = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    "Facial Feature Mapping",
    "Micro-expression Detection",
    "Forehead & Eye Analysis",
    "Personality Profiling",
  ];

  const benefits = [
    {
      icon: <Scan size={22} />,
      title: "Feature Analysis",
      desc: "Decode personality traits by analyzing eyes, nose, and jawline shapes.",
    },
    {
      icon: <Focus size={22} />,
      title: "Hidden Intentions",
      desc: "Learn to spot micro-expressions that reveal a person's true thoughts.",
    },
    {
      icon: <UserCircle size={22} />,
      title: "Relationship Mapping",
      desc: "Understand compatibility and trustworthiness through facial structure.",
    },
  ];

  return (
    <main className="premium-wrapper">

      
      <section className="hero-card">

        
        <div className="hero-left">
          <div className="hero-glass">
            <span className="badge">ADVANCED SAMUDRIKA</span>
            <h2 className="course-tag">FACE</h2>
            
            <div className="image-box">
              
              <img src="/FaceReading.png" alt="Face Reading Course" />
            </div>

            <p className="cert">SAMUDRIKA SHASTRA SYSTEM</p>
          </div>
        </div>

        
        <div className="hero-right">
          <div className="top-row">
            <span className="verified">PHYSIOGNOMY EXPERT</span>
            <div className="rating">
              <Star size={14} fill="#84cc16" color="#84cc16" />
              <span>4.9 (210+ Students)</span>
            </div>
          </div>

          <h1 className="title">
            Face Reading <span>The Mirror of Soul</span>
          </h1>

          <p className="subtitle">
            Identify anyone's character, destiny, and health status just by looking at their 
            facial features. Master the ancient art of Samudrika Shastra for modern success.
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
            <h2>₹9,999</h2>
            <span className="discount">Bestseller Masterclass</span>
            <p>Includes Bonus Micro-Expression Guide</p>
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
            Read the Face, <span>Know the Person</span>
          </h2>
        </div>

        <div className="video-layout">
          {/* VIDEO PLAYER */}
          <div className="video-box">
            <iframe
              src="https://www.youtube.com/embed/YOUR_FACE_VIDEO_ID"
              title="Face Reading Course Preview"
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

export default FaceReading;