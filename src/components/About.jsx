import React from 'react';
import './About.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>{t(translations.aboutTitle)}</h2>
            <p className="lead">
              {t(translations.aboutSubtitle)}
            </p>
            <p>
              {t(translations.aboutText1)}
            </p>
            <p>
              {t(translations.aboutText2)}
            </p>
            <div className="mission">
              <h3>{t(translations.ourMission)}</h3>
              <p>{t(translations.missionText)}</p>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">150+</span>
                <span className="stat-label">{t(translations.performancesAnnually)}</span>
              </div>
              <div className="stat">
                <span className="stat-number">45</span>
                <span className="stat-label">{t(translations.worldClassMusicians)}</span>
              </div>
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">{t(translations.yearsOfExcellence)}</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="musical-note">♪</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;