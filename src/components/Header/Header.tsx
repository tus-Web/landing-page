import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>TUS.Genesis</h2>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#hero">ホーム</a></li>
            <li><a href="#about">概要</a></li>
            <li><a href="#activity">活動</a></li>
            <li><a href="#join">参加の流れ</a></li>
          </ul>
        </nav>

        <a href="#contact" className="cta-button">
          今すぐ申し込む
        </a>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
