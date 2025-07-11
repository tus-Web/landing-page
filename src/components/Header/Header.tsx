import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>TUS.Genesis</h2>
        </div>
        
        <a href="#contact" className="cta-button">
          今すぐ申し込む
        </a>
      </div>
    </header>
  );
};

export default Header;
