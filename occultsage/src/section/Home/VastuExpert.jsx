import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Play, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import "./VastuExpert.css";

const VastuExpert = () => {
  const [play, setPlay] = useState(false);
  const navigate = useNavigate(); 
  const videoId = "iOa4MY5qeis";

  const details = [
    { title: "Balanced Living", desc: "Aligning elements for stability." },
    { title: "Expert Analysis", desc: "Vastu insights for growth." },
    { title: "Energy Flow", desc: "Optimize mental focus." },
    { title: "Smart Direction", desc: "Peak productivity placement." },
  ];

  
  const handleConsultClick = () => {
    navigate('/consultancy');
    
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <section className="vastu-section-premium">
      <div className="container-refined">
        <div className="vastu-flex-box">
          
          
          <div className="vastu-info-side">
            <div className="badge-modern">
              <ShieldCheck size={14} className="gold-text" /> 
              <span>Ancient Wisdom • Modern Science</span>
            </div>
            
            <h2 className="heading-main">
              Bring Harmony to Your <br />
              <span className="text-gold">Living Space</span>
            </h2>
            
            <p className="desc-main">
              Transform your environment into a sanctuary of success. Our expert Vastu 
              consultations bridge the gap between ancient traditions and modern lifestyle.
            </p>

            <div className="features-grid-refined">
              {details.map((item, i) => (
                <div key={i} className="feature-card-mini">
                  <div className="icon-gold">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="feature-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            
            <button className="btn-navy-gold" onClick={handleConsultClick}>
              Book Your Consultation <span>→</span>
            </button>
          </div>

          
          <div className="vastu-media-side">
            <div className="video-container-refined">
              {!play ? (
                <div className="video-trigger-box" onClick={() => setPlay(true)}>
                  <img 
                    src="/Acharyapankaj.jpeg" 
                    alt="Acharya Pankaj" 
                    className="video-thumb-img" 
                  />
                  <div className="overlay-minimal">
                    <div className="play-btn-modern">
                      <Play fill="#0a192f" stroke="none" size={24} />
                    </div>
                  </div>
                  <div className="name-tag-floating">
                    <Sparkles size={12} className="gold-text" />
                    <span>Acharya Pankaj • Vastu Specialist</span>
                  </div>
                </div>
              ) : (
                <div className="iframe-wrapper-final">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="Vastu Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VastuExpert;