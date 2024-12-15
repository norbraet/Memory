import React, { useState, useEffect, useRef } from 'react'
import './ThemeToggle.css'

const Toggle = ({ label }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const id = useRef(`slider-${Math.random().toString(36).substring(2, 9)}`).current

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
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
    <label className='theme-toggle-container' htmlFor={id}>
      <div className='switch-wrap'>
        <input type='checkbox' id={id} checked={isDarkMode} onChange={toggleTheme} />
        <div className='switch'></div>
      </div>
      <span>{label}</span>
    </label>
  )
}

export default Toggle
