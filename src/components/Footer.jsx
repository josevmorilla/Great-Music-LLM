import React from 'react';
import './Footer.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Great Music LLM</h3>
            <p>
              {t(translations.footerAboutText)}
            </p>
          </div>
          
          <div className="footer-section">
            <h4>{t(translations.quickLinks)}</h4>
            <ul>
              <li><a href="#about">{t(translations.about)}</a></li>
              <li><a href="#services">{t(translations.services)}</a></li>
              <li><a href="#musicians">{t(translations.musicians)}</a></li>
              <li><a href="#contact">{t(translations.contact)}</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t(translations.services)}</h4>
            <ul>
              <li><a href="#">{t(translations.symphonyConcerts)}</a></li>
              <li><a href="#">{t(translations.privateEvents)}</a></li>
              <li><a href="#">{t(translations.chamberMusic)}</a></li>
              <li><a href="#">{t(translations.recordingSessions)}</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t(translations.contactInfo)}</h4>
            <p>{t(translations.montrealAddress)}</p>
            <p>+1 (514) 555-0123</p>
            <p>bookings@greatmusicllm.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t(translations.copyright)}</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;