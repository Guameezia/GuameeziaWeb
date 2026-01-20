import { createContext, useContext, useState } from 'react'
import { en } from '../locales/en'
import { zh } from '../locales/zh'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const LanguageProvider = ({ children }) => {
  // Default language: English
  const [language, setLanguage] = useState(() => {
    // Read saved language from localStorage; fallback to English
    const savedLanguage = localStorage.getItem('website-language')
    return savedLanguage || 'en'
  })

  const translations = {
    en,
    zh,
  }

  const t = translations[language] || translations.en

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('website-language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageProvider }
