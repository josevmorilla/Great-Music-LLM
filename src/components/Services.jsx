import React from 'react';
import './Services.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t(translations.symphonyConcerts),
      description: t(translations.symphonyConcertsDesc),
      icon: "🎼"
    },
    {
      title: t(translations.privateEvents),
      description: t(translations.privateEventsDesc),
      icon: "✨"
    },
    {
      title: t(translations.chamberMusic),
      description: t(translations.chamberMusicDesc),
      icon: "🎻"
    },
    {
      title: t(translations.educationalWorkshops),
      description: t(translations.educationalWorkshopsDesc),
      icon: "🎓"
    },
    {
      title: t(translations.recordingSessions),
      description: t(translations.recordingSessionsDesc),
      icon: "🎵"
    },
    {
      title: t(translations.culturalCollaborations),
      description: t(translations.culturalCollaborationsDesc),
      icon: "🏛️"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>{t(translations.servicesTitle)}</h2>
          <p>
            {t(translations.servicesDescription)}
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-btn">{t(translations.learnMore)}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;