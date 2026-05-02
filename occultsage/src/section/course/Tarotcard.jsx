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

const TarotCourse = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    "78 Tarot Cards Mastery",
    "Major & Minor Arcana",
    "Celtic Cross Spread",
    "Intuitive Reading Skills",
  ];

  const benefits = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Certified Tarot Training",
      desc: "Get complete professional certification in tarot reading.",
    },
    {
      icon: <Zap size={22} />,
      title: "Intuition Development",
      desc: "Learn how to read energy instead of memorizing meanings.",
    },
    {
      icon: <Users size={22} />,
      title: "Community & Practice",
      desc: "Join learners & practice real tarot readings confidently.",
    },
  ];

  return (
    <main className="premium-wrapper">

      
      <section className="hero-card">

        
        <div className="hero-left">
          <div className="hero-glass">

            <span className="badge">SPECIALIZED COURSE</span>

            <h2 className="course-tag">TAROT</h2>

            <div className="image-box">
              <img src="/TarotCard.png" alt="Tarot Course" />
            </div>

            <p className="cert">RIDER WAITE SYSTEM</p>

          </div>
        </div>

        
        <div className="hero-right">

          <div className="top-row">
            <span className="verified">DIVINE GUIDANCE</span>

            <div className="rating">
              <Star size={14} fill="#84cc16" color="#84cc16" />
              <span>4.9 (180+ Students)</span>
            </div>
          </div>

          <h1 className="title">
            Tarot Reading <span>The Intuitive Journey</span>
          </h1>

          <p className="subtitle">
            Master the art of tarot reading by understanding card energy,
            intuition, and powerful spreads used by professionals.
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
            <h2>₹11,999</h2>
            <span className="discount">Limited Seats Available</span>
            <p>Includes Bonus Pendulum Session</p>
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
            Learn the Language of <span>Tarot Cards</span>
          </h2>
        </div>

        <div className="video-layout">

          
          <div className="video-box">
            <iframe
              src="https://www.youtube.com/embed/QFi86P0mo7o"
              title="Tarot Course Preview"
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

export default TarotCourse;