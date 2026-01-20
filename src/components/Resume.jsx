import { useLanguage } from '../contexts/LanguageContext'
import './Resume.css'

function Resume() {
  const { t } = useLanguage()

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">{t.resume.title}</h2>
        
        <div className="resume-content">
          {/* Education */}
          <div className="resume-section">
            <h3 className="resume-section-title">{t.resume.education.title}</h3>
            <div className="resume-items">
              {t.resume.education.items.map((item, index) => (
                <div key={index} className="resume-item">
                  <div className="resume-item-header">
                    <h4>{item.degree}</h4>
                    <span className="resume-date">{item.period}</span>
                  </div>
                  <p className="resume-institution">{item.institution}</p>
                  {item.location && <p className="resume-location">{item.location}</p>}
                  {item.description && <p className="resume-description">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <h3 className="resume-section-title">{t.resume.experience.title}</h3>
            <div className="resume-items">
              {t.resume.experience.items.map((item, index) => (
                <div key={index} className="resume-item">
                  <div className="resume-item-header">
                    <h4>{item.position}</h4>
                    <span className="resume-date">{item.period}</span>
                  </div>
                  <p className="resume-institution">{item.company}</p>
                  {item.location && <p className="resume-location">{item.location}</p>}
                  {item.description && <p className="resume-description">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Research */}
          {t.resume.research && (
            <div className="resume-section">
              <h3 className="resume-section-title">{t.resume.research.title}</h3>
              <div className="resume-items">
                {t.resume.research.items.map((item, index) => (
                  <div key={index} className="resume-item">
                    <div className="resume-item-header">
                      <h4>{item.topic}</h4>
                      <span className="resume-date">{item.period}</span>
                    </div>
                    <p className="resume-institution">{item.institution}</p>
                    {item.description && <p className="resume-description">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Resume
