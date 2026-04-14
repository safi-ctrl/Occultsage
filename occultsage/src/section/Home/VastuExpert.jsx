import React, { useState } from 'react'; 
import './VastuExpert.css';

const VastuExpert = () => {
  
  const [isPlaying, setIsPlaying] = useState(false);


  const videoId = "iOa4MY5qeis"; 

  const tips = [
    { title: "Space Balancing and Harmony", description: "Create a living space where all five elements are in perfect alignment, promoting peace and stability.Balanced surroundings not only enhance comfort but also attract positive energy and well-being." },
    { title: "Professional Consultation is Key", description: "Expert guidance ensures accurate Vastu analysis tailored to your specific needs and space.A professional approach helps avoid costly mistakes and ensures long-term harmony and success." },
    { title: "Authentic Materials", description: "Using natural and high-quality materials strengthens the flow of positive energy within your spaceAuthenticity in design not only improves aesthetics but also supports long-lasting harmony." },
    { title: "Entrance and Facing", description: "The entrance of a space plays a crucial role in attracting opportunities and positive vibrations.Correct placement ensures a smooth flow of energy, enhancing prosperity and overall growth." },
    { title: "Clutter-Free Environment", description: "A clean and organized space allows energy to flow freely without obstacles or negativity.Decluttering your surroundings creates mental clarity, focus, and a sense of calm." },
    { title: "Directional Intention", description: "Every direction holds unique energy that influences different aspects of life.Aligning activities with the right directions enhances productivity, balance, and success." }
  ];

  return (
    <section className="vastu-section-container">
      <div className="vastu-header-flex">
        
        <div className="vastu-image-wrapper">
          <div className="vastu-main-card" style={{ position: 'relative', overflow: 'hidden' }}>
            
            {!isPlaying ? (
             
              <>
                <img 
                  src="/Acharyapankaj.jpeg" 
                  alt="Acharya Pankaj" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="vastu-play-overlay">
                  <button className="vastu-play-btn" onClick={() => setIsPlaying(true)}>
                    <div className="vastu-play-icon"></div>
                  </button>
                </div>
              </>
            ) : (
             
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Acharya Pankaj Vastu Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0 }}
              ></iframe>
            )}

          </div>
          <div className="vastu-bg-shape"></div>
        </div>

       
        <div className="vastu-content-side">
          <h1>
            What Does the Vastu Expert <br />
            <span>Acharya Pankaj</span> Say About Vastu Shastra?
          </h1>
          <div className="vastu-text-group">
            <p className="vastu-intro-p">
              Vastu Shastra is a powerful ancient Indian science of architecture that balances natural 
              energies to enhance your well-being, success, and prosperity.
            </p>
            <p className="vastu-highlight-p">
              Here are some valuable tips from one of the best Vastu consultants in India:
            </p>
          </div>
        </div>
      </div>

      
      <div className="vastu-tips-grid">
        {tips.map((tip, index) => (
          <div key={index} className="vastu-tip-item">
            <div className="vastu-lotus-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5">
                <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" />
                <path d="M12 22V12" /><path d="M7 15C7 15 9 13 12 13C15 13 17 15 17 15" />
              </svg>
            </div>
            <div className="vastu-tip-text">
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VastuExpert;