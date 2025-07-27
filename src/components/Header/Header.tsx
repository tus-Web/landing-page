import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-content">
            <div className="logo-text-container">
              <span className="logo-subtitle">理科大テックコミュニティ</span>
              <h2>tus.Genesis</h2>
            </div>
          </div>
        </div>

        <a href="#application" className="cta-button">
          公式LINEはこちら
        </a>
      </div>
    </header>
  );
};

export default Header;
