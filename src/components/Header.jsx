import React, { useState } from 'react';
import './Header.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Great Music LLM</h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#home">{t(translations.home)}</a></li>
            <li><a href="#about">{t(translations.about)}</a></li>
            <li><a href="#services">{t(translations.services)}</a></li>
            <li><a href="#musicians">{t(translations.musicians)}</a></li>
            <li><a href="#contact">{t(translations.contact)}</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="language-toggle" onClick={toggleLanguage}>
            <span className="flag-icon">{language === 'en' ? '🇫🇷' : '🇨🇦'}</span>
            {t(translations.language)}
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;