import React, { useState, useEffect } from 'react'
import './ThemeToggle.css'

const Toggle = ({ label }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light') 

    setIsDarkMode(initialTheme === 'dark')
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }
  
  return (
    <label className="themeToggleContainer" htmlFor="something">
        <span>{ label }</span>
        <div className="switch-wrap">
            <input 
              type="checkbox" 
              id="something" 
              checked={isDarkMode}
              onClick={toggleTheme} />
            <div className="switch"></div>
        </div>
    </label>
  )
}

export default Toggle;
