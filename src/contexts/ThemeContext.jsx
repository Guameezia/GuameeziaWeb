import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const ThemeProvider = ({ children }) => {
  // Default theme: light
  const [theme, setTheme] = useState(() => {
    // Read saved theme from localStorage; fallback to light
    const savedTheme = localStorage.getItem('website-theme')
    const initialTheme = savedTheme || 'light'
    // Apply theme immediately to avoid flash
    document.documentElement.setAttribute('data-theme', initialTheme)
    return initialTheme
  })

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('website-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }
