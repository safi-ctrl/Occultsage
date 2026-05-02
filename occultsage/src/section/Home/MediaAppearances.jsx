import React, { useState } from 'react';
import { Play, Clock, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './MediaAppearances.css';

const MediaAppearances = () => {
  const tabs = [
    "Yearly Horoscope 2026", 
    "Learn Astrology", 
    "Identifying Houses", 
    "All Planetary Transits"
  ];

  const [activeTab, setActiveTab] = useState("Yearly Horoscope 2026");

  const videoData = [
    // --- Yearly Horoscope 2026 ---
    { id: "ktlRp0Vr99g", category: "Yearly Horoscope 2026", title: "Aries 2026 Predictions", time: "12:45", desc: "Detailed analysis of health, wealth and career for Aries." },
    { id: "iSRhQzea5ZE", category: "Yearly Horoscope 2026", title: "Taurus Career Growth", time: "15:20", desc: "How planetary shifts will impact Taurus professionals." },
    { id: "u-11Cux0SM4", category: "Yearly Horoscope 2026", title: "Gemini Love Life", time: "10:15", desc: "Relationship guide based on 2026 transits." },
    { id: "iOa4MY5qeis", category: "Yearly Horoscope 2026", title: "Cancer Yearly Overview", time: "18:30", desc: "A complete roadmap for Cancerians in the coming year." },

    // --- Learn Astrology ---
    { id: "dQw4w9WgXcQ", category: "Learn Astrology", title: "Basics of Birth Charts", time: "22:10", desc: "Understand how to read a Kundli from scratch." },
    { id: "3JZ_D3ELwOQ", category: "Learn Astrology", title: "9 Planets Explained", time: "30:45", desc: "The role and significance of Navagrahas in life." },
    { id: "L_jWHffIx5E", category: "Learn Astrology", title: "Aspects & Conjunctions", time: "25:00", desc: "How planets interact with each other in a house." },
    { id: "V-_O7nl0Ii0", category: "Learn Astrology", title: "Intro to Nakshatras", time: "19:55", desc: "The power of lunar mansions in Vedic Astrology." },

    // --- Identifying Houses ---
    { id: "7wtfhZwyrcc", category: "Identifying Houses", title: "The 1st House: Self", time: "14:20", desc: "Identifying personality and physical traits." },
    { id: "kJQP7kiw5Fk", category: "Identifying Houses", title: "7th House: Marriage", time: "16:40", desc: "How to see spouse and partnerships in kundli." },
    { id: "OPf0YbXqDm0", category: "Identifying Houses", title: "10th House: Karma", time: "21:15", desc: "Understanding your career and public status." },
    { id: "fJ9rUzIMcZQ", category: "Identifying Houses", title: "Wealth Houses (2nd & 11th)", time: "13:50", desc: "Predicting financial stability and gains." },

    // --- All Planetary Transits ---
    { id: "y6120QOlsfU", category: "All Planetary Transits", title: "Saturn Transit Effects", time: "45:00", desc: "Major life shifts during Shani's movement." },
    { id: "JGwWNGJdvx8", category: "All Planetary Transits", title: "Jupiter in 2026", time: "38:20", desc: "Guru Gochar: Who will get lucky this year?" },
    { id: "9bZkp7q19f0", category: "All Planetary Transits", title: "Rahu-Ketu Phala", time: "28:10", desc: "Handling the shadow planets' transition." },
    { id: "e-ORhEE9VVg", category: "All Planetary Transits", title: "Mars Retrograde", time: "11:30", desc: "Managing energy and anger during Mars transit." }
  ];

  const filteredVideos = videoData.filter(v => v.category === activeTab);

  // Redirect Function
  const openYouTube = (id) => {
    window.open(`https://www.youtube.com/watch?v=${id}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="astrology-premium-section">
      <div className="container">
        <div className="header-box">
          <p className="gold-sub">Watch and listen</p>
          <h2 className="main-heading">Simplifying Astrology for <span className="gold-text">You</span></h2>
        </div>

        <div className="tabs-wrapper">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              className={`tab-item ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && <motion.div layoutId="underline" className="active-line" />}
            </button>
          ))}
        </div>

        <div className="video-grid-refined">
          <AnimatePresence mode="wait">
            {filteredVideos.map((video) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="video-card-astrology"
                onClick={() => openYouTube(video.id)} // Click event for redirection
                style={{ cursor: 'pointer' }} // Hover par hath ka icon dikhega
              >
                <div className="thumb-box">
                  <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} alt={video.title} />
                  <div className="play-icon-center">
                    <Play fill="#d4af37" stroke="none" size={24} />
                  </div>
                </div>
                
                <div className="info-box">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-desc">{video.desc}</p>
                  <div className="footer-meta">
                    <div className="time-stamp"><Clock size={14} /> <span>{video.time} mins</span></div>
                    <ArrowUpRight size={18} className="arrow-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MediaAppearances;