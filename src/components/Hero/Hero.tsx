import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            未来を創る<br />
            <span className="highlight">Web サークル</span>
          </h1>
          <p className="hero-description">
            最新のWeb技術を学び、創造性豊かなプロジェクトを共に作り上げる大学サークルです。
            初心者から上級者まで、みんなで成長していきましょう！
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">詳しく見る</a>
            <a href="#contact" className="btn btn-secondary">参加する</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-visual">
            <div className="code-block">
              <span>&lt;Web Circle /&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
