import React from 'react';
import './Hero.css';

const AnimatedText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => (
  <>
    {Array.from(text).map((char, index) => (
      <span
        key={index}
        className="letter"
        style={{ animationDelay: `${delay + index * 0.08}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </>
);

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <AnimatedText text="創造をともに" delay={0} />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
