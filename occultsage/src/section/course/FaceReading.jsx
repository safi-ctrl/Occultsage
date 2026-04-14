import React, { useEffect } from 'react';
import { ShieldCheck, Star, Award, ArrowRight, CheckCircle2, Globe, User, Clock, Scan, Sparkles, UserCircle, Focus } from 'lucide-react';
import './FaceReading.css'; 

const FaceReading = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="premium-page-wrapper">
      
      {/* --- SECTION 1: COMPACT HERO CARD --- */}
      <div className="compact-hero-card">
        <div className="compact-left-branding">
          <div className="glass-inner-card">
             <div className="mini-badge">ADVANCED</div>
             <h2 className="mini-brand-title">Face<br/>Analysis</h2>
             <div className="mini-instructor-frame">
                <img src="/FaceReading.png" alt="Face Reading Expert" className="mini-instructor-img" />
             </div>
             <div className="mini-cert-tag">SAMUDRIKA SHASTRA</div>
          </div>
        </div>

        <div className="compact-right-details">
          <div className="compact-status-row">
            <span className="verify-tag" style={{background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold'}}>CHARACTER DECODING</span>
            <div className="mini-rating" style={{display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '15px'}}>
              <Star size={12} fill="#84cc16" color="#84cc16" /> 
              <span style={{fontSize: '12px', fontWeight: '600'}}>4.7 (110+ Students)</span>
            </div>
          </div>

          <h1 className="compact-title">
            Face Reading: <span className="gold-grad">The Mirror of Soul</span>
          </h1>

          <p className="compact-desc" style={{fontSize: '14px', color: '#64748b', fontWeight: '600', letterSpacing: '1px', marginBottom: '15px'}}>
            FACIAL FEATURES <span>+</span> SHAPES <span>+</span> EXPRESSIONS
          </p>

          <div className="compact-points-grid">
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> 5 Vital Organs Mapping</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Forehead & Luck Lines</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Eye Shapes & Intentions</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Micro-Expression Cues</div>
          </div>

          <div className="mini-specs-bar">
            <div className="spec-unit"><Globe size={16} /> Hindi</div>
            <div className="spec-unit"><User size={16} /> Acharya Pankaj Ji</div>
            <div className="spec-unit"><Clock size={16} /> Lifetime Access</div>
          </div>

          <div className="compact-price-box">
             <div className="price-stack" style={{display: 'flex', alignItems: 'baseline', gap: '10px'}}>
                <span className="p-actual">₹8,999</span>
                <span className="p-off">EXCLUSIVE PRICE</span>
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
           <h2 className="preview-title-text">Decode Personality at a <span className="gold-grad">Glance</span></h2>
        </div>

        <div className="video-content-grid">
           {/* Left: Video Player */}
           <div className="video-player-column">
              <div className="video-aura-effect"></div>
              <div className="video-studio-box">
                 <iframe 
                    src="https://www.youtube.com/embed/YOUR_FACEREADING_VIDEO_ID" 
                    title="Face Reading Course Preview"
                    frameBorder="0"
                    allowFullScreen
                 ></iframe>
              </div>
           </div>

           {/* Right: Feature Cards */}
           <div className="video-description-column">
              <div className="compact-desc-card">
                 <div className="desc-icon-box"><Scan size={20} /></div>
                 <div className="desc-info">
                    <h4>3-Zone Analysis</h4>
                    <p>Learn to divide the face into three zones to understand past, present, and future luck.</p>
                 </div>
              </div>

              <div className="compact-desc-card">
                 <div className="desc-icon-box"><Focus size={20} /></div>
                 <div className="desc-info">
                    <h4>Mole Reading Bonus</h4>
                    <p>Identify the significance of moles on different parts of the face and their impact.</p>
                 </div>
              </div>

              <div className="mini-consultant-badge">
                 <UserCircle size={18} style={{color: '#bf953f'}} />
                 <span>Bonus: Interview & Business Negotiation Mastery</span>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default FaceReading;