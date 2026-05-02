import React, { useEffect } from "react";
import {
  Star,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  Globe,
  Watch,
  Search,
  RotateCw
} from "lucide-react";
import "../../Styles/Courses.css";

const WatchReading = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    "Dial Shape Analysis",
    "Strap Material Impact",
    "Number & Symbol Energy",
    "Correcting Time Alignment",
  ];

  const benefits = [
    {
      icon: <Watch size={22} />,
      title: "Subconscious Mapping",
      desc: "Understand how your watch reflects your inner personality and mindset.",
    },
    {
      icon: <RotateCw size={22} />,
      title: "Fortune Alignment",
      desc: "Identify which watches block growth and how to replace them for luck.",
    },
    {
      icon: <Search size={22} />,
      title: "Live Watch Audit",
      desc: "Get your own watch analyzed live by Acharya Pankaj Ji during the course.",
    },
  ];

  return (
    <main className="premium-wrapper">

      
      <section className="hero-card">

        
        <div className="hero-left">
          <div className="hero-glass">
            <span className="badge">TRENDING COURSE</span>
            <h2 className="course-tag">WATCH</h2>
            
            <div className="image-box">
              
              <img src="/WatchReading.png" alt="Watch Reading Course" />
            </div>

            <p className="cert">TIME GRAPHOLOGY SYSTEM</p>
          </div>
        </div>

       
        <div className="hero-right">
          <div className="top-row">
            <span className="verified">SUBCONSCIOUS TIME</span>
            <div className="rating">
              <Star size={14} fill="#84cc16" color="#84cc16" />
              <span>4.9 (95+ Students)</span>
            </div>
          </div>

          <h1 className="title">
            Watch Reading <span>Master Your Time</span>
          </h1>

          <p className="subtitle">
            Master the secret science of Time Graphology. Learn how dial shapes, colors, 
            and straps influence your wealth, health, and social confidence.
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
            <h2>₹7,499</h2>
            <span className="discount">Early Bird Offer</span>
            <p>Includes Bonus Live Audit Session</p>
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
            Change Your Watch, <span>Change Your Life</span>
          </h2>
        </div>

        <div className="video-layout">
         
          <div className="video-box">
            <iframe
              src="https://www.youtube.com/embed/YOUR_WATCH_VIDEO_ID"
              title="Watch Reading Course Preview"
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

export default WatchReading;