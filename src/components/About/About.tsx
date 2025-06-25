import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>TUS.Genesisについて</h2>
          <p>私たちのサークルについて</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>エンジニアリングで未来を創造</h3>
            <p>
              TUS.Genesisは、東京理科大学でプログラミング技術を学び、実践的なプロジェクトを通じて
              スキルアップを目指す学生団体です。Web開発、モバイルアプリ開発、AI・機械学習など
              幅広い分野で活動しています。
            </p>
            <p>
              初心者大歓迎！経験豊富な先輩メンバーがサポートし、一人ひとりのペースに合わせて
              学習を進めることができます。理科大生なら誰でも参加できます。
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
