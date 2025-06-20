import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>About Us</h2>
          <p>私たちのサークルについて</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Web技術で未来を創造</h3>
            <p>
              私たちのWebサークルは、最新のWeb技術を学び、実践的なプロジェクトを通じて
              スキルアップを目指す学生団体です。HTML、CSS、JavaScriptから始まり、
              React、Vue.js、Node.jsなど現代的なフレームワークまで幅広く学習しています。
            </p>
            <p>
              初心者歓迎！経験豊富な先輩メンバーがサポートし、一人ひとりのペースに合わせて
              学習を進めることができます。
            </p>
          </div>
          
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h4>実践的な学習</h4>
              <p>実際のプロジェクトを通じて、実務に近い経験を積むことができます。</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h4>チーム開発</h4>
              <p>GitHubを使ったチーム開発を学び、協力してプロダクトを作り上げます。</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h4>幅広い技術</h4>
              <p>フロントエンドからバックエンドまで、Web開発の全領域をカバーします。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
