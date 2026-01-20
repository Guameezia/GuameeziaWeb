import { siteConfig } from '../config'
import { useLanguage } from '../contexts/LanguageContext'
import './About.css'

function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              {t.about.description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < t.about.description.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
          <div className="about-skills">
            <h3>{t.about.skillsTitle}</h3>
            <div className="skills-grid">
              {siteConfig.about.skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
