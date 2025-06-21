import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TUS.Genesis</h3>
            <p>
              次世代のエンジニアを目指す<br />
              東京理科大学プログラミングサークル
            </p>
            <div className="social-links">
              <a href="https://twitter.com/tusgenesis" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                🐦
              </a>
              <a href="https://github.com/tusgenesis" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                📦
              </a>
              <a href="https://discord.gg/tusgenesis" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                💬
              </a>
              <a href="https://www.instagram.com/tusgenesis" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                �
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>ナビゲーション</h4>
            <ul>
              <li><a href="#about">概要</a></li>
              <li><a href="#activity">活動</a></li>
              <li><a href="#flow">参加の流れ</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
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
              <li>📧 contact@tusgenesis.org</li>
              <li>📱 @tusgenesis</li>
              <li>📍 東京理科大学 野田キャンパス</li>
              <li>🕒 毎週水曜日 18:00-20:00</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2025 tus.Genesis. All rights reserved.</p>
            <p>Made with ❤️ by tus.Genesis Members</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
