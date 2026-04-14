import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: "What is Scientific Vastu?", answer: "Scientific Vastu balances energy using five elements and cardinal directions to enhance prosperity." },
    { question: "Is Demolition required?", answer: "Absolutely not. We use 'No-Cut' scientific remedies like specific colors, metals, and symbols." },
    { question: "What is the 3-Day Webinar?", answer: "It's an intensive session covering 16 directions, entrance effects, and DIY energy mapping." },
    { question: "How does Astrology Sync work?", answer: "We align your personal horoscope with your building's floor plan for hyper-personalized results." },
    { question: "Is it suitable for Beginners?", answer: "Yes, our courses are designed from scratch, making complex Vedic logic easy for everyone." }
  ];

  return (
    <section className="occult-faq-section">
      <div className="faq-cosmic-container">
        
        
        <div className="faq-visual-left">
          <div className="moon-3d-sphere">
        
            <img src="/3dimage.png" alt="Realistic Moon" className="moon-surface" />
            <div className="moon-atmosphere-glow"></div>
            <div className="moon-crater-shadow"></div>
          </div>
          <h2 className="cosmic-brand-name">OCCULTSAGE</h2>
        </div>

        
        <div className="faq-content-right">
          <h1 className="faq-premium-title">Frequently Asked Questions</h1>
          <div className="faq-premium-list">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`faq-premium-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="faq-item-header">
                  <h3>{item.question}</h3>
                  <span className="faq-toggle-icon">{activeIndex === index ? '−' : '+'}</span>
                </div>
                <div className="faq-item-body">
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;