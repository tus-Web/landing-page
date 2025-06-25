import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            創造を
            <span className="highlight">ともに</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
