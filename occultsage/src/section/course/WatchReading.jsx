import React, { useEffect } from 'react';
import { ShieldCheck, Star, Award, ArrowRight, CheckCircle2, Globe, User, Clock, Watch, Search, Zap, RotateCw } from 'lucide-react';
import './WatchReading.css'; 

const WatchReading = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="premium-page-wrapper">
      
      {/* --- SECTION 1: COMPACT HERO CARD --- */}
      <div className="compact-hero-card">
        <div className="compact-left-branding">
          <div className="glass-inner-card">
             <div className="mini-badge">TRENDING</div>
             <h2 className="mini-brand-title">Watch<br/>Analysis</h2>
             <div className="mini-instructor-frame">
                {/* Yahan Watch Reading wali graphic image use karein */}
                <img src="/WatchReading.png" alt="Watch Reading Expert" className="mini-instructor-img" />
             </div>
             <div className="mini-cert-tag">TIME GRAPHOLOGY</div>
          </div>
        </div>

        <div className="compact-right-details">
          <div className="compact-status-row">
            <span className="verify-tag" style={{background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold'}}>SUBCONSCIOUS TIME</span>
            <div className="mini-rating" style={{display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '15px'}}>
              <Star size={12} fill="#84cc16" color="#84cc16" /> 
              <span style={{fontSize: '12px', fontWeight: '600'}}>4.9 (95+ Students)</span>
            </div>
          </div>

          <h1 className="compact-title">
            Watch Reading: <span className="gold-grad">Master Your Time</span>
          </h1>

          <p className="compact-desc" style={{fontSize: '14px', color: '#64748b', fontWeight: '600', letterSpacing: '1px', marginBottom: '15px'}}>
            DIAL SHAPES <span>+</span> STRAP TYPES <span>+</span> NUMBERS
          </p>

          <div className="compact-points-grid">
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Dial Color Psychology</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Digital vs Analog Impact</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Metal vs Leather Straps</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Hidden Health Indicators</div>
          </div>

          <div className="mini-specs-bar">
            <div className="spec-unit"><Globe size={16} /> Hindi</div>
            <div className="spec-unit"><User size={16} /> Acharya Pankaj Ji</div>
            <div className="spec-unit"><Clock size={16} /> Lifetime Access</div>
          </div>

          <div className="compact-price-box">
             <div className="price-stack" style={{display: 'flex', alignItems: 'baseline', gap: '10px'}}>
                <span className="p-actual">₹7,499</span>
                <span className="p-off">EARLY BIRD</span>
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
           <h2 className="preview-title-text">Change Your Watch, <span className="gold-grad">Change Your Life</span></h2>
        </div>

        <div className="video-content-grid">
           {/* Left: Video Player */}
           <div className="video-player-column">
              <div className="video-aura-effect"></div>
              <div className="video-studio-box">
                 <iframe 
                    src="https://www.youtube.com/embed/YOUR_WATCH_VIDEO_ID" 
                    title="Watch Reading Course Preview"
                    frameBorder="0"
                    allowFullScreen
                 ></iframe>
              </div>
           </div>

           {/* Right: Feature Cards */}
           <div className="video-description-column">
              <div className="compact-desc-card">
                 <div className="desc-icon-box"><Watch size={20} /></div>
                 <div className="desc-info">
                    <h4>The Power of Straps</h4>
                    <p>Understand how the material of your watch strap affects your social confidence and stability.</p>
                 </div>
              </div>

              <div className="compact-desc-card">
                 <div className="desc-icon-box"><RotateCw size={20} /></div>
                 <div className="desc-info">
                    <h4>Correcting Bad Luck</h4>
                    <p>Identify which watches are blocking your financial growth and how to replace them.</p>
                 </div>
              </div>

              <div className="mini-consultant-badge">
                 <Search size={18} style={{color: '#bf953f'}} />
                 <span>Bonus: Live Watch Audit for Students</span>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default WatchReading;