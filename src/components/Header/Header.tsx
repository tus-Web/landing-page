import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-content">
            <h2>tus.Genesis</h2>
          </div>
        </div>
        
        <a href="#contact" className="cta-button">
          今すぐ申し込む
        </a>
      </div>
    </header>
  );
};

export default Header;
