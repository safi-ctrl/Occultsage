import React, { useEffect } from 'react';
import { ShieldCheck, Star, Award, ArrowRight, CheckCircle2, Globe, User, Clock, Hash, LayoutGrid, Binary } from 'lucide-react';
import './Neomerology.css'; 

const Neomerology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="premium-page-wrapper">
      
      {/* --- SECTION 1: COMPACT HERO CARD --- */}
      <div className="compact-hero-card">
        <div className="compact-left-branding">
          <div className="glass-inner-card">
             <div className="mini-badge">MOST POPULAR</div>
             <h2 className="mini-brand-title">Numbers<br/>Mastery</h2>
             <div className="mini-instructor-frame">
                {/* Yahan aap apni Numerology wali image use kar sakte hain */}
                <img src="/Neomerology.png" alt="Numerology Expert" className="mini-instructor-img" />
             </div>
             <div className="mini-cert-tag">LO-SHU SPECIAL</div>
          </div>
        </div>

        <div className="compact-right-details">
          <div className="compact-status-row">
            <span className="verify-tag" style={{background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold'}}>NUMEROLOGY PRO</span>
            <div className="mini-rating" style={{display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '15px'}}>
              <Star size={12} fill="#84cc16" color="#84cc16" /> 
              <span style={{fontSize: '12px', fontWeight: '600'}}>4.9 (250+ Students)</span>
            </div>
          </div>

          <h1 className="compact-title">
            Numerology Mastery: <span className="gold-grad">Grid & Predictions</span>
          </h1>

          <p className="compact-desc" style={{fontSize: '14px', color: '#64748b', fontWeight: '600', letterSpacing: '1px', marginBottom: '15px'}}>
            CHALDEAN <span>+</span> PYTHAGOREAN <span>+</span> LO SHU GRID
          </p>

          <div className="compact-points-grid">
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Destiny Numbers</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Grid Analysis</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Name Correction</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Remedial Power</div>
          </div>

          <div className="mini-specs-bar">
            <div className="spec-unit"><Globe size={16} /> Hindi</div>
            <div className="spec-unit"><User size={16} /> Acharya Pankaj Ji</div>
            <div className="spec-unit"><Clock size={16} /> Lifetime Access</div>
          </div>

          <div className="compact-price-box">
             <div className="price-stack" style={{display: 'flex', alignItems: 'baseline', gap: '10px'}}>
                <span className="p-actual">₹14,999</span>
                <span className="p-off">SPECIAL OFFER</span>
             </div>
          </div>

          <div className="compact-button-group">
            <button className="btn-syllabus-mini">CURRICULUM</button>
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
           <h2 className="preview-title-text">Unlock Your <span className="gold-grad">Numerical Destiny</span></h2>
        </div>

        <div className="video-content-grid">
           {/* Left: Video Player */}
           <div className="video-player-column">
              <div className="video-aura-effect"></div>
              <div className="video-studio-box">
                 <iframe 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                    title="Numerology Course Preview"
                    frameBorder="0"
                    allowFullScreen
                 ></iframe>
              </div>
           </div>

           {/* Right: Feature Cards */}
           <div className="video-description-column">
              <div className="compact-desc-card">
                 <div className="desc-icon-box"><LayoutGrid size={20} /></div>
                 <div className="desc-info">
                    <h4>Lo Shu Grid Secrets</h4>
                    <p>Learn the ancient Chinese 3x3 grid system for 100% accurate character reading.</p>
                 </div>
              </div>

              <div className="compact-desc-card">
                 <div className="desc-icon-box"><Binary size={20} /></div>
                 <div className="desc-info">
                    <h4>Karmic Debt Numbers</h4>
                    <p>Identify hidden obstacles in life through numbers 13, 14, 16, and 19.</p>
                 </div>
              </div>

              <div className="mini-consultant-badge">
                 <Hash size={18} style={{color: '#bf953f'}} />
                 <span>Mobile Numerology Bonus Included</span>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Neomerology;