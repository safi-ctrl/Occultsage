import React from 'react';
import { ShieldCheck, Star, Zap, Globe, Clock, User, Award, Download, ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react';
import './astrologyvastuCombo.css'; 

const AstrologyvastuCombo = () => {
  return (
    <div className="combo-compact-wrapper">
      
      {/* --- SECTION 1: COMPACT HERO CARD (Keep as is) --- */}
      <div className="compact-combo-card">
        <div className="compact-left-brand">
          <div className="glass-vault">
             <div className="mini-badge">COMBO OFFER</div>
             <h2 className="brand-title-mini">ULTIMATE<br /><span className="gold-text">DIVINE</span><br />COMBO</h2>
             <div className="compact-img-frame">
                <img src="/Astrovastu.png" alt="Acharya Pankaj Ji" className="img-fit" />
             </div>
             <div className="mini-cert-pill">
                <Award size={14} /> Professional Dual Certification
             </div>
          </div>
        </div>

        <div className="compact-right-info">
          <div className="compact-meta">
            <span className="premium-tag">PRO MASTERCLASS</span>
            <div className="mini-rating">
              <Star size={12} fill="#d4af37" color="#d4af37" /> 
              <span>4.9 (250+ Success Stories)</span>
            </div>
          </div>
          <h1 className="compact-heading">
            Astrology & Vastu Masterclass <br />
            <span className="gold-gradient-text">Foundation to Professional</span>
          </h1>
          <div className="compact-feature-grid">
            <div className="mini-f-item"><CheckCircle2 size={16} className="green-icon" /> Predictive Astrology</div>
            <div className="mini-f-item"><CheckCircle2 size={16} className="green-icon" /> Professional Vastu</div>
            <div className="mini-f-item"><CheckCircle2 size={16} className="green-icon" /> Remedial Science</div>
            <div className="mini-f-item"><CheckCircle2 size={16} className="green-icon" /> Practical Cases</div>
          </div>
          <div className="mini-specs-row">
           
          </div>
          <div className="compact-pricing-vault">
            <div className="price-stack">
               <span className="old-val">Value: <del>₹45,000</del></span>
               <div className="price-row">
                  <span className="new-val">₹29,999</span>
                  <span className="off-tag">SAVE 33%</span>
               </div>
            </div>
          </div>
          <div className="compact-action-group">
            <button className="btn-syllabus-mini">SYLLABUS</button>
            <button className="btn-enroll-mini">
              ENROLL NOW <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: NEW PROFESSIONAL STUDIO VIDEO SECTION --- */}
      <section className="pro-video-section">
        <div className="section-header-centered">
          <span className="eyebrow-text">COURSE PREVIEW</span>
          <h2 className="section-title-large">Become a <span className="gold-gradient-text">Holistic Expert</span></h2>
          <p className="section-subtitle-text">Watch the trailer to see how this combo provides 360-degree spiritual solutions by aligning Space Energy with Time Logic.</p>
        </div>

        <div className="pro-video-grid">
          {/* Left: Cinematic Video Player */}
          <div className="video-column-left">
            <div className="video-glow-aura"></div>
            <div className="video-studio-frame">
              <div className="aspect-ratio-box">
                <iframe 
                  src="https://www.youtube.com/embed/YOUR_COMBO_VIDEO_ID" 
                  title="Combo Masterclass Preview" 
                  frameBorder="0" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>

          {/* Right: Premium Impact Cards */}
          <div className="video-column-right">
            <div className="impact-card-premium">
              <div className="impact-icon-box"><Zap size={22} /></div>
              <div className="impact-content">
                <h4>Double Income Potential</h4>
                <p>Scale your consulting business by offering dual expertise to every client.</p>
              </div>
            </div>

            <div className="impact-card-premium">
              <div className="impact-icon-box"><ShieldCheck size={22} /></div>
              <div className="impact-content">
                <h4>Deep Root Analysis</h4>
                <p>Identify if the block is in the Birth Chart or the Living Space with 100% precision.</p>
              </div>
            </div>

            <div className="bonus-dark-callout">
               <div className="bonus-badge"><Star size={14} fill="#bf953f" color="#bf953f" /> BONUS</div>
               <p><strong>Commercial Vastu Checklist</strong> & Advanced Remedies Guide Included.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AstrologyvastuCombo;