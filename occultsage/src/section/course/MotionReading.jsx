import React, { useEffect } from "react";
import {
  Star,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Users,
  Eye,
  Move,
  Activity,
  UserCheck
} from "lucide-react";
import "../../Styles/Courses.css";

const MotionReading = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    "Walking Style Analysis",
    "Hand Movement Psychology",
    "Sitting Posture Secrets",
    "Energy Flow (Gait Analysis)",
  ];

  const benefits = [
    {
      icon: <Move size={22} />,
      title: "Body Language Mastery",
      desc: "Decode what people are thinking just by looking at their movements.",
    },
    {
      icon: <Activity size={22} />,
      title: "Energy Identification",
      desc: "Identify low and high-frequency energy patterns in human motion.",
    },
    {
      icon: <UserCheck size={22} />,
      title: "Confidence Blueprint",
      desc: "Correct your own motion to project authority and trustworthiness.",
    },
  ];

  return (
    <main className="premium-wrapper">

      
      <section className="hero-card">

        
        <div className="hero-left">
          <div className="hero-glass">
            <span className="badge">ADVANCED PSYCHOLOGY</span>
            <h2 className="course-tag">MOTION</h2>
            
            <div className="image-box">
              
              <img src="/MotionReading.png" alt="Motion Reading Course" />
            </div>

            <p className="cert">DYNAMIC BODY LANGUAGE SYSTEM</p>
          </div>
        </div>

        
        <div className="hero-right">
          <div className="top-row">
            <span className="verified">MOVEMENT ANALYSIS</span>
            <div className="rating">
              <Star size={14} fill="#84cc16" color="#84cc16" />
              <span>4.8 (120+ Students)</span>
            </div>
          </div>

          <h1 className="title">
            Motion Reading <span>The Art of Movement</span>
          </h1>

          <p className="subtitle">
            Master the ability to read people through their gait, gestures, and sub-conscious 
            body movements. Learn to identify lies, hidden intentions, and personality traits.
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
            <h2>₹8,999</h2>
            <span className="discount">Exclusive Masterclass</span>
            <p>Includes Practical Movement Exercises</p>
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
            Analyze Actions, <span>Understand Intentions</span>
          </h2>
        </div>

        <div className="video-layout">
          
          <div className="video-box">
            <iframe
              src="https://www.youtube.com/embed/YOUR_MOTION_VIDEO_ID"
              title="Motion Reading Course Preview"
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

export default MotionReading;