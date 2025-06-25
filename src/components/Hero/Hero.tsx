import React from 'react';
import './Hero.css';

const AnimatedText: React.FC<{ text: string }> = ({ text }) => (
  <>
    {Array.from(text).map((char, index) => (
      <span
        key={index}
        className="letter"
        style={{ animationDelay: `${index * 0.1}s` }}
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
            <AnimatedText text="未来を創る" />
            <br />
            <span className="highlight">
              <AnimatedText text="Web サークル" />
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
