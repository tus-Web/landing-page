import React from 'react';
import './Hero.css';
import { FaCode } from 'react-icons/fa';

const AnimatedText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => (
  <>
    {Array.from(text).map((char, index) => (
      <span
        key={index}
        className="letter"
        style={{ animationDelay: `${delay + index * 0.08}s` }}
      >
        {char === ' ' ? ' ' : char}
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
            <AnimatedText text="Create with us" delay={0} />
          </h1>
          <div className="hero-buttons">
            <a href="#application" className="btn btn-primary">
              公式LINEはこちら
            </a>
          </div>
        </div>
        <div className="hero-image">
          <FaCode className="hero-code-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
