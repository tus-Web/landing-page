import React from 'react';
import './Footer.css';
import { FaGithub, FaLine, FaInstagram} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>tus.Genesis</h3>
            <div className="social-links">
              <a href="https://x.com/tus_Genesis" target="_blank" rel="noopener noreferrer" aria-label="X">
                <FaXTwitter className='footer-icon' />
              </a>
              <a href="https://www.instagram.com/tus.genesis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className='footer-icon' />
              </a>
              <a href="https://lin.ee/lfc18V0" target="_blank" rel="noopener noreferrer" aria-label="Line">
                <FaLine className='footer-icon' />
              </a>
              <a href="https://github.com/tus-Web" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className='footer-icon' />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>ナビゲーション</h4>
            <ul>
              <li><a href="#about">概要</a></li>
              <li><a href="#activity">活動</a></li>
              <li><a href="#join">参加の流れ</a></li>
              <li><a href="#application">公式LINEはこちら</a></li>
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
