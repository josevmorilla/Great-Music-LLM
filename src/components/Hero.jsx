import React from 'react';
import './Hero.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="container">
          <h1>{t(translations.heroTitle)}</h1>
          <p>
            {t(translations.heroDescription)}
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">{t(translations.bookPerformance)}</button>
            <button className="btn btn-secondary">{t(translations.exploreMusic)}</button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;