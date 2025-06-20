import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Web Circle</h3>
            <p>
              未来を創るWebサークル<br />
              一緒に学び、成長していきましょう！
            </p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="GitHub">📦</a>
              <a href="#" aria-label="Discord">💬</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#activity">Activity</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Activities</h4>
            <ul>
              <li><a href="#">勉強会</a></li>
              <li><a href="#">ハッカソン</a></li>
              <li><a href="#">プロジェクト開発</a></li>
              <li><a href="#">技術ブログ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 webcircle@university.ac.jp</li>
              <li>📱 @webcircle_uni</li>
              <li>📍 情報学部棟 3F PC室</li>
              <li>🕒 毎週火曜日 18:00-20:00</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2024 Web Circle. All rights reserved.</p>
            <p>Made with ❤️ by Web Circle Members</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
