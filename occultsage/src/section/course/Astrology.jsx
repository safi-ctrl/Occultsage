import React, { useEffect } from 'react';
import { Star, ShieldCheck, Zap, Award, BookOpen, ArrowRight, CheckCircle2, Globe, Users } from 'lucide-react';
import './Astrology.css';

const Astrology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="premium-page-wrapper">
      
      {/* --- SECTION 1: COMPACT HERO CARD (Kept Same Size) --- */}
      <div className="compact-hero-card">
        <div className="compact-left-branding">
          <div className="glass-inner-card">
             <div className="mini-badge">BEST SELLER</div>
             <h2 className="mini-brand-title">VASTU<br/>SHASTRA</h2>
             <div className="mini-instructor-frame">
                <img src="/Acharyajii.png" alt="Acharya Pankaj" className="mini-instructor-img" />
             </div>
             <div className="mini-cert-tag">PROFESSIONAL SERIES</div>
          </div>
        </div>

        <div className="compact-right-details">
          <div className="compact-status-row">
            <span className="verify-tag">● ISO CERTIFIED</span>
            <div className="mini-rating">
              <Star size={12} fill="#84cc16" color="#84cc16" /> 
              <span>4.9 (1.2K+ Students)</span>
            </div>
          </div>

          <h1 className="compact-title">
            Vastu Masterclass: <span className="gold-grad">Basic to Pro</span>
          </h1>

          <div className="compact-points-grid">
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> 40+ HD Modules</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Scientific Logic</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Lifetime Access</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Case Studies</div>
          </div>

          <div className="compact-price-box">
             <div className="price-row">
                <span className="p-actual">₹19,999</span>
                <span className="p-off">20% OFF</span>
             </div>
             <p className="p-note">Certificate + Community Access Included</p>
          </div>

          <div className="compact-button-group">
            <button className="btn-syllabus-mini">SYLLABUS</button>
            <button className="btn-enroll-mini">
              ENROLL NOW <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: PREMIUM VIDEO LAYOUT (As per Astrovastu Style) --- */}
      <section className="premium-video-layout">
        <div className="video-section-header">
          <span className="gold-label">INSIDE THE ACADEMY</span>
          <h2 className="section-main-title">Experience the <span className="gold-text-gradient">Logic of Vastu</span></h2>
          <p className="section-subtitle">Take a 2-minute tour to see how we bridge ancient Vedic wisdom with modern scientific logic.</p>
        </div>

        <div className="video-grid-flex">
          {/* LEFT: Cinematic Video Player */}
          <div className="video-player-side">
            <div className="video-glow-aura"></div>
            <div className="video-frame-outer">
              <div className="aspect-ratio-box">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Course Preview"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* RIGHT: High-Impact Benefit Cards */}
          <div className="benefits-cards-side">
            <div className="benefit-mini-card">
              <div className="benefit-icon-wrapper"><ShieldCheck size={24} /></div>
              <div className="benefit-info">
                <h4>ISO Certified Academy</h4>
                <p>Internationally recognized certification valid globally.</p>
              </div>
            </div>

            <div className="benefit-mini-card">
              <div className="benefit-icon-wrapper"><Zap size={24} /></div>
              <div className="benefit-info">
                <h4>Logic-Driven Remedies</h4>
                <p>Scientific solutions without structural demolition.</p>
              </div>
            </div>

            <div className="benefit-mini-card">
              <div className="benefit-icon-wrapper"><Users size={24} /></div>
              <div className="benefit-info">
                <h4>15,000+ Community</h4>
                <p>Access to India's most vibrant expert network.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="bottom-trust-strip">
           <div className="strip-item"><b>1,200+</b> Happy Reviews</div>
           <div className="strip-divider"></div>
           <div className="strip-item"><b>45+</b> Countries Reach</div>
           <div className="strip-divider"></div>
           <div className="strip-item"><b>24/7</b> Student Support</div>
        </div>
      </section>

    </div>
  );
};

export default Astrology;