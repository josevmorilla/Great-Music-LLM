import React, { useState } from 'react';
import './Contact.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>{t(translations.contactTitle)}</h2>
            <p className="lead">
              {t(translations.contactDescription)}
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>{t(translations.address)}</h4>
                  <p>{t(translations.montrealAddress)}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>{t(translations.phoneNumber)}</h4>
                  <p>+1 (514) 555-0123</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>{t(translations.emailAddress)}</h4>
                  <p>bookings@greatmusicllm.com</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>{t(translations.followUs)}</h4>
              <div className="social-icons">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">YouTube</a>
                <a href="#" className="social-link">Spotify</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t(translations.name)}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t(translations.email)}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization (Optional)"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t(translations.eventType)}</option>
                  <option value="concert">{t(translations.symphonyConcerts)}</option>
                  <option value="private">{t(translations.privateEvents)}</option>
                  <option value="chamber">{t(translations.chamberMusic)}</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="recording">{t(translations.recordingSessions)}</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={t(translations.message)}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                {t(translations.sendMessage)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;