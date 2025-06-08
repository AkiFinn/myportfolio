import React, { useState, useEffect } from 'react';

const SkillsCarousel = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [skills.length]);
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % skills.length
    );
  };
  
  return (
    <div className="skills-section">
      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {skills.map((category, index) => (
            <div key={index} className="carousel-item">
              <div className="skill-category">
                <h3>{category.category}</h3>
                <ul className="skill-list">
                  {category.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="carousel-nav">
        <button className="carousel-btn" onClick={goToPrev}>&lt;</button>
        <button className="carousel-btn" onClick={goToNext}>&gt;</button>
      </div>
      
      <div className="carousel-dots">
        {skills.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;