import { useLanguage } from '../contexts/LanguageContext'
import './LanguageSwitcher.css'

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage()

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'zh' : 'en')
  }

  return (
    <button
      className="language-switcher-btn"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
    >
      {language === 'en' ? 'ZH' : 'EN'}
    </button>
  )
}

export default LanguageSwitcher
