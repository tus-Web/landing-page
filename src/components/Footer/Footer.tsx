import React from 'react';
import './Footer.css';
import { FaTwitter, FaGithub, FaDiscord, FaInstagram} from 'react-icons/fa'

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>tus.Genesis</h3>
            <div className="social-links">
              <a href="https://twitter.com/tusgenesis" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://github.com/tusgenesis" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://discord.gg/tusgenesis" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <FaDiscord />
              </a>
              <a href="https://www.instagram.com/tusgenesis" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
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
            <h4>Contact Info</h4>
            <ul>
              <li>📧 contact@tusgenesis.org</li>
              <li>📱 @tusgenesis</li>
              <li>📍 東京理科大学 葛飾キャンパス</li>
              <li>🕒 毎週金曜日 18:00-20:00</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {year} tus.Genesis All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
