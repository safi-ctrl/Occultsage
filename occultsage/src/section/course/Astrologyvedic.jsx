import React, { useEffect } from 'react';
import { ShieldCheck, Star, Zap, Award, Download, ArrowRight, CheckCircle2, Globe, User, Clock, Sparkles } from 'lucide-react';
import './Astrologyvedic.css'; 

const Astrologyvedic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="premium-page-wrapper">
      
      {/* --- SECTION 1: COMPACT HERO CARD --- */}
      <div className="compact-hero-card">
        <div className="compact-left-branding">
          <div className="glass-inner-card">
             <div className="mini-badge">BEST SELLER</div>
             <h2 className="mini-brand-title">Astro<br/>Mastery</h2>
             <div className="mini-instructor-frame">
                <img src="/Astrovedic.png" alt="Acharya Pankaj Ji" className="mini-instructor-img" />
             </div>
             <div className="mini-cert-tag">3-IN-1 COMBO</div>
          </div>
        </div>

        <div className="compact-right-details">
          <div className="compact-status-row">
            <span className="verify-tag">PRO CERTIFIED</span>
            <div className="mini-rating">
              <Star size={12} fill="#84cc16" color="#84cc16" /> 
              <span>4.8 (120+ Students)</span>
            </div>
          </div>

          <h1 className="compact-title">
            Astrology Masterclass: <span className="gold-grad">Basic to Pro</span>
          </h1>

          <p className="compact-desc">VEDIC <span>+</span> KP <span>+</span> NADI ASTROLOGY</p>

          <div className="compact-points-grid">
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Vedic Logic</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> KP Precision</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Nadi Speed</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Practical Rules</div>
          </div>

          <div className="mini-specs-bar">
            <div className="spec-unit"><Globe size={16} /> Hindi</div>
            <div className="spec-unit"><User size={16} /> Acharya Pankaj Ji</div>
            <div className="spec-unit"><Clock size={16} /> Lifetime</div>
          </div>

          <div className="compact-price-box">
             <div className="price-stack">
                <span className="p-actual">₹24,999</span>
                <span className="p-off">30% OFF</span>
             </div>
          </div>

          <div className="compact-button-group">
            <button className="btn-syllabus-mini">SYLLABUS</button>
            <button className="btn-enroll-mini">
              ENROLL NOW <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: SIDE-BY-SIDE VIDEO & DESCRIPTION --- */}
      <section className="compact-video-section">
        <div className="section-header-mini">
           <span className="eyebrow">COURSE PREVIEW</span>
           <h2 className="preview-title-text">Scientific Predictive <span className="gold-grad">Mastery</span></h2>
        </div>

        <div className="video-content-grid">
           {/* Left: Video Player */}
           <div className="video-player-column">
              <div className="video-aura-effect"></div>
              <div className="video-studio-box">
                 <iframe 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                    title="Astro Masterclass Overview"
                    frameBorder="0"
                    allowFullScreen
                 ></iframe>
              </div>
           </div>

           {/* Right: Feature Cards */}
           <div className="video-description-column">
              <div className="compact-desc-card">
                 <div className="desc-icon-box"><Sparkles size={20} /></div>
                 <div className="desc-info">
                    <h4>Precision Timing</h4>
                    <p>Learn to pinpoint exact event dates using KP & Nadi logic.</p>
                 </div>
              </div>

              <div className="compact-desc-card">
                 <div className="desc-icon-box"><ShieldCheck size={20} /></div>
                 <div className="desc-info">
                    <h4>ISO 9001 Certified</h4>
                    <p>Internationally recognized certification valid in 45+ countries.</p>
                 </div>
              </div>

              <div className="mini-consultant-badge">
                 <Award size={18} className="gold-text" />
                 <span>Consultant Training Included</span>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Astrologyvedic;