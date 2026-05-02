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

const PalmistryCourse = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    "3 Main Lines Analysis",
    "7 Planet Mounts",
    "Rare Symbols (Fish, Lotus)",
    "Hand Shape Secrets",
  ];

  const benefits = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Certified Training",
      desc: "Get industry-recognized certification with complete palmistry knowledge.",
    },
    {
      icon: <Zap size={22} />,
      title: "Practical Learning",
      desc: "Master real-world hand reading with live examples & techniques.",
    },
    {
      icon: <Users size={22} />,
      title: "Community Access",
      desc: "Join a private group of learners & grow your spiritual expertise.",
    },
  ];

  return (
    <main className="premium-wrapper">

      <section className="hero-card">

       
        <div className="hero-left">
          <div className="hero-glass">

            <span className="badge">SPECIALIZED COURSE</span>

            <h2 className="course-tag">PALMISTRY</h2>

            <div className="image-box">
              <img src="/Palmistry.png" alt="Palmistry Course" />
            </div>

            <p className="cert">HAST REKHA SHASTRA</p>

          </div>
        </div>

        
        <div className="hero-right">

          
          <div className="top-row">
            <span className="verified">HAND READING EXPERT</span>

            <div className="rating">
              <Star size={14} fill="#84cc16" color="#84cc16" />
              <span>4.8 (150+ Students)</span>
            </div>
          </div>

         
          <h1 className="title">
            Master the Art of <span>Palm Reading</span>
          </h1>

          <p className="subtitle">
            Learn to decode life patterns, personality traits, and future insights
            through ancient palmistry techniques.
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
            <span className="discount">Limited Time Offer</span>
            <p>Includes Bonus PDF + Case Studies</p>
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
            Discover the Power in Your <span>Hands</span>
          </h2>
        </div>

        <div className="video-layout">

          
          <div className="video-box">
            <iframe
              src="https://www.youtube.com/embed/YOUR_PALMISTRY_VIDEO_ID"
              title="Palmistry Course Preview"
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

export default PalmistryCourse;