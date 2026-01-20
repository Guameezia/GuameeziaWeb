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
      aria-label={language === 'en' ? '切换到繁體中文' : 'Switch to English'}
    >
      {language === 'en' ? 'EN' : '國'}
    </button>
  )
}

export default LanguageSwitcher
