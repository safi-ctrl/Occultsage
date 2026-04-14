import React, { useEffect } from 'react';
import { ShieldCheck, Star, Award, ArrowRight, CheckCircle2, Globe, User, Clock, Layers, Sparkles, Eye } from 'lucide-react';
import './Tarotcard.css'; 

const Tarotcard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="premium-page-wrapper">
      
      {/* --- SECTION 1: COMPACT HERO CARD --- */}
      <div className="compact-hero-card">
        <div className="compact-left-branding">
          <div className="glass-inner-card">
             <div className="mini-badge">NEW LAUNCH</div>
             <h2 className="mini-brand-title">Tarot<br/>Mystics</h2>
             <div className="mini-instructor-frame">
                {/* Yahan apni Tarot wali instructor image ya graphic lagayein */}
                <img src="/TarotCard.png" alt="Tarot Expert" className="mini-instructor-img" />
             </div>
             <div className="mini-cert-tag">RIDER WAITE SPECIAL</div>
          </div>
        </div>

        <div className="compact-right-details">
          <div className="compact-status-row">
            <span className="verify-tag" style={{background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold'}}>DIVINE GUIDANCE</span>
            <div className="mini-rating" style={{display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '15px'}}>
              <Star size={12} fill="#84cc16" color="#84cc16" /> 
              <span style={{fontSize: '12px', fontWeight: '600'}}>4.9 (180+ Students)</span>
            </div>
          </div>

          <h1 className="compact-title">
            Tarot Reading: <span className="gold-grad">The Intuitive Journey</span>
          </h1>

          <p className="compact-desc" style={{fontSize: '14px', color: '#64748b', fontWeight: '600', letterSpacing: '1px', marginBottom: '15px'}}>
            MAJOR ARCANA <span>+</span> MINOR ARCANA <span>+</span> SPREADS
          </p>

          <div className="compact-points-grid">
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> 78 Cards Decoding</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Celtic Cross Spread</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Intuition Building</div>
            <div className="point-item"><CheckCircle2 size={16} className="green-text" /> Professional Ethics</div>
          </div>

          <div className="mini-specs-bar">
            <div className="spec-unit"><Globe size={16} /> Hindi</div>
            <div className="spec-unit"><User size={16} /> Acharya Pankaj Ji</div>
            <div className="spec-unit"><Clock size={16} /> Lifetime Access</div>
          </div>

          <div className="compact-price-box">
             <div className="price-stack" style={{display: 'flex', alignItems: 'baseline', gap: '10px'}}>
                <span className="p-actual">₹11,999</span>
                <span className="p-off">LIMITED SLOTS</span>
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
           <h2 className="preview-title-text">Master the Art of <span className="gold-grad">Card Reading</span></h2>
        </div>

        <div className="video-content-grid">
           {/* Left: Video Player */}
           <div className="video-player-column">
              <div className="video-aura-effect"></div>
              <div className="video-studio-box">
                 <iframe 
                    src="https://www.youtube.com/embed/QFi86P0mo7o" 
                    title="Tarot Course Preview"
                    frameBorder="0"
                    allowFullScreen
                 ></iframe>
              </div>
           </div>

           {/* Right: Feature Cards */}
           <div className="video-description-column">
              <div className="compact-desc-card">
                 <div className="desc-icon-box"><Eye size={20} /></div>
                 <div className="desc-info">
                    <h4>Intuition Over Memorization</h4>
                    <p>Learn to read the energy of the cards rather than just memorizing book meanings.</p>
                 </div>
              </div>

              <div className="compact-desc-card">
                 <div className="desc-icon-box"><Sparkles size={20} /></div>
                 <div className="desc-info">
                    <h4>Remedial Tarot</h4>
                    <p>Unique techniques to provide remedies based on the card outcomes for clients.</p>
                 </div>
              </div>

              <div className="mini-consultant-badge">
                 <Award size={18} style={{color: '#bf953f'}} />
                 <span>Bonus: Yes/No Crystal Pendulum Session</span>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Tarotcard;