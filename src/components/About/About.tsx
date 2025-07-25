import React from 'react';
import { FaAtlas , FaHandshake , FaTasks} from "react-icons/fa";
import { IconContext } from 'react-icons'
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>tus.Genesisについて</h2>
          <p>私たちのサークルについて</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>次はあなたの創造で、</h3>
            <p>
              tus.Genesisでは、プログラミング技術を学び、実践的なプロジェクトを通じて
              スキルアップを目指しています。Web開発、モバイルアプリ開発を軸に活動しています。
              理科大生なら誰でも歓迎！基本の知識から学び、必ずレベルアップできます。
              </p>
          </div>
          
          <div className="features">
            <div className="feature-card">
              <div className="feature-header">
                <IconContext.Provider value={{ color: '#8b5cf6'}}>
                <div className="feature-icon"><FaAtlas/></div>
                </IconContext.Provider>
                <h4>実践的な学習</h4>
              </div>
              <p>実際のプロジェクトを通じて、実務に近い経験を積むことができます。</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-header">
                <IconContext.Provider value={{ color: '#8b5cf6'}}>
                <div className="feature-icon"><FaHandshake/></div>
                </IconContext.Provider>
                <h4>チーム開発</h4>
              </div>
              <p>GitHubを使ったチーム開発を学び、協力してプロダクトを作り上げます。</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-header">
                <IconContext.Provider value={{ color: '#8b5cf6'}}>
                <div className="feature-icon"><FaTasks/></div>
                </IconContext.Provider>
                <h4>幅広い技術</h4>
              </div>
              <p>フロントエンドからバックエンドまで、Web開発の全領域をカバーします。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
