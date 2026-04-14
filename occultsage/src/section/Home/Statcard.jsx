import React, { useState, useEffect, useRef } from 'react';

const StatCard = ({ endValue, duration, label, suffix, stars, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseFloat(endValue);
    const totalFrames = 60; 
    const intervalTime = (duration * 1000) / totalFrames;
    
    
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible, endValue, duration]);

  return (
    <div className="stat-card" ref={cardRef}>
      <h2 className="stat-value">
        {count.toFixed(decimals)}
        {suffix}
      </h2>
      <p className="stat-label">{label}</p>
      {stars && <div className="stat-stars">★★★★★</div>}
    </div>
  );
};

export default StatCard;