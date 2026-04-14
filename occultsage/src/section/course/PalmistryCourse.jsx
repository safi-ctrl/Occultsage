import React, { useEffect } from 'react';
import { ShieldCheck, Star, Award, ArrowRight, CheckCircle2, Globe, User, Clock, Fingerprint, Sparkles, Hand } from 'lucide-react';
import './PalmistryCourse.css'; 

const PalmistryCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="premium-page-wrapper">
      
      {/* --- SECTION 1: COMPACT HERO CARD --- */}
      <div className="compact-hero-card">
        <div className="compact-left-branding">
          <div className="glass-inner-card">
             <div className="mini-badge">SPECIALIZED</div>
             <h2 className="mini-brand-title">Palm<br/>Science</h2>
             <div className="mini-instructor-frame">
                {/* Yahan apni Palmistry wali image/graphic ka path dalein */}
                <img src="/Palmistry.png" alt="Palmistry Expert" className="mini-instructor-img" />
             </div>
             <div className="mini-cert-tag">HAST REKHA SHASTRA</div>
          </div>
        </div>

        <div className="compact-right-details">
          <div className="compact-status-row">
            <span className="verify-tag" style={{background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold'}}>HAND READING PRO</span>
            <div className="mini-rating" style={{display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '15px'}}>
              <Star size={12} fill="#84cc16" color="#84cc16" /> 
              <span style={{fontSize: '12px', fontWeight: '600'}}>4.8 (150+ Students)</span>
            </div>
          </div>

          <h1 className="compact-title">
            Palmistry Mastery: <span className="gold-grad">Decoding Destiny</span>
          </h1>

          <p className="compact-desc" style={{fontSize: '14px', color: '#64748b', fontWeight: '600', letterSpacing: '1px', marginBottom: '15px'}}>
            MAIN LINES <span>+</span> MOUNTS <span>+</span> SIGNS & SYMBOLS
          </p>

          <div className="compact-points-grid">
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> 3 Main Lines Analysis</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> 7 Planets Mounts</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Rare Signs (Fish, Lotus)</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Hand Shape Secrets</div>
          </div>

          <div className="mini-specs-bar">
            <div className="spec-unit"><Globe size={16} /> Hindi</div>
            <div className="spec-unit"><User size={16} /> Acharya Pankaj Ji</div>
            <div className="spec-unit"><Clock size={16} /> Lifetime Access</div>
          </div>

          <div className="compact-price-box">
             <div className="price-stack" style={{display: 'flex', alignItems: 'baseline', gap: '10px'}}>
                <span className="p-actual">₹9,999</span>
                <span className="p-off">BEST VALUE</span>
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
           <h2 className="preview-title-text">See Your Future in Your <span className="gold-grad">Hands</span></h2>
        </div>

        <div className="video-content-grid">
           {/* Left: Video Player */}
           <div className="video-player-column">
              <div className="video-aura-effect"></div>
              <div className="video-studio-box">
                 <iframe 
                    src="https://www.youtube.com/embed/YOUR_PALMISTRY_VIDEO_ID" 
                    title="Palmistry Course Preview"
                    frameBorder="0"
                    allowFullScreen
                 ></iframe>
              </div>
           </div>

           {/* Right: Feature Cards */}
           <div className="video-description-column">
              <div className="compact-desc-card">
                 <div className="desc-icon-box"><Hand size={20} /></div>
                 <div className="desc-info">
                    <h4>Practical Reading</h4>
                    <p>Live session on how to capture clear palm images and read lines accurately.</p>
                 </div>
              </div>

              <div className="compact-desc-card">
                 <div className="desc-icon-box"><Fingerprint size={20} /></div>
                 <div className="desc-info">
                    <h4>Fingerprint Science</h4>
                    <p>Bonus module on Dermatoglyphics to understand deep personality traits.</p>
                 </div>
              </div>

              <div className="mini-consultant-badge">
                 <Award size={18} style={{color: '#bf953f'}} />
                 <span>Bonus: Professional Palmistry Kit PDF</span>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default PalmistryCourse;