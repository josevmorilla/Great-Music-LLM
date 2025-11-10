import React from 'react';
import './Musicians.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Musicians = () => {
  const { t } = useLanguage();
  
  const musicians = [
    {
      name: "Elena Vittoria",
      role: t(translations.musicDirector),
      bio: "Maestro Vittoria brings over 25 years of international conducting experience, having led orchestras at Carnegie Hall, Royal Opera House, and Vienna State Opera.",
      achievements: ["Grammy Award Winner", "Royal Philharmonic Society Gold Medal", "UNESCO Artist for Peace"]
    },
    {
      name: "Alessandro Chen",
      role: t(translations.concertmaster),
      bio: "First violin virtuoso trained at Juilliard and the Royal Academy of Music. His performances have captivated audiences across six continents.",
      achievements: ["Tchaikovsky Competition Winner", "Avery Fisher Prize Recipient", "Stradivarius Society Artist"]
    },
    {
      name: "Isabella Rodriguez",
      role: t(translations.principalCellist),
      bio: "Renowned for her passionate interpretations and technical brilliance, Isabella has been featured as soloist with major orchestras worldwide.",
      achievements: ["ARD Munich Competition Winner", "Borletti-Buitoni Trust Fellow", "BBC New Generation Artist"]
    },
    {
      name: "Marcus Thompson",
      role: t(translations.principalFlutist),
      bio: "A master of both classical and contemporary repertoire, Marcus brings innovative artistry to every performance with his exceptional musicianship.",
      achievements: ["Van Cliburn Competition Medalist", "Gilmore Artist Award", "Chamber Music America Award"]
    }
  ];

  return (
    <section id="musicians" className="musicians">
      <div className="container">
        <div className="section-header">
          <h2>{t(translations.musiciansTitle)}</h2>
          <p>
            {t(translations.musiciansDescription)}
          </p>
        </div>
        <div className="musicians-grid">
          {musicians.map((musician, index) => (
            <div key={index} className="musician-card">
              <div className="musician-image">
                <div className="image-placeholder">
                  <span className="initials">
                    {musician.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="musician-info">
                <h3>{musician.name}</h3>
                <p className="role">{musician.role}</p>
                <p className="bio">{musician.bio}</p>
                <div className="achievements">
                  {musician.achievements.map((achievement, i) => (
                    <span key={i} className="achievement">{achievement}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Musicians;