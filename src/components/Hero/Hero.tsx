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
        {char === ' ' ? ' ' : char}
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
            <AnimatedText text="tus.Genesis" delay={0} />
          </h1>
          <p className="hero-subtitle">
            <AnimatedText text="共に高め合い、共に創る開発サークル" delay={0.5} />
          </p>
          <div className="hero-buttons">
            <a href="#application" className="btn btn-primary">
              公式LINEはこちら
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
