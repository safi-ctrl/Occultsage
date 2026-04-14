import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const Stats = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const statsData = [
    { target: 15, suffix: " +", label: "Years of Experience", decimals: 0 },
    { target: 20, suffix: "k+", label: "Lives Touched", decimals: 0 },
    { target: 2, suffix: "K+", label: "TV Shows", decimals: 0 },
    { target: 25, suffix: " +", label: "Awards for Excellence", decimals: 0 },
    { target: 4.9, suffix: "/5", label: "Rated on Google", decimals: 1 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const frames = 60;
    const interval = duration / frames;

    const timer = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map((count, i) => {
          const target = statsData[i].target;
          const step = target / frames;
          if (count >= target) return target;
          return count + step;
        })
      );
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container-five">
        {statsData.map((stat, index) => (
          <div 
            key={index} 
            className={`stat-card ${index === 2 ? 'hide-on-mobile' : ''}`}
          >
            <div className="stat-card-inner">
              <h2 className="stat-value">
                {counts[index].toFixed(stat.decimals)}
                <span className="stat-suffix">{stat.suffix}</span>
              </h2>
              <div className="stat-line"></div>
              <p className="stat-label">{stat.label}</p>
              {index === 4 && <div className="stat-stars">★★★★★</div>}
            </div>
            {/* Vertical Divider for Desktop */}
            {index !== statsData.length - 1 && <div className="vertical-divider"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;