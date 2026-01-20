import { useLanguage } from '../contexts/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-header">
          <h1 className="hero-name">{t.hero.name}</h1>
          <p className="hero-email">- {t.hero.email} -</p>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-section-title">{t.hero.title}</h2>
            
            <div className="hero-paragraphs">
              <p className="hero-paragraph">
                <span className="hero-label">I AM</span> {t.hero.description}
              </p>
              
              <p className="hero-paragraph">
                <span className="hero-label">MY INTEREST</span> {t.hero.interest}
              </p>
              
              <p className="hero-paragraph">
                <span className="hero-label">IN MY OPINION</span> {t.hero.opinion}
              </p>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-placeholder">
              {/* You can place your photo here */}
              <img 
                src="https://raw.githubusercontent.com/Guameezia/guameezia-website/3f30c5e42b53999916fe0b2de30c448f331d7840/portrait.JPG" 
                alt={t.hero.name}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
