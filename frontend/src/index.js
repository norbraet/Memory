import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Header from './components/Header/Header'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import { LogProvider } from './context/LogContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogProvider>
      <Header>
          <p className="header-heading">Raspberry PI Control UI</p>
          <ThemeToggle label="Toggle Theme"/>
      </Header>

      <Dashboard />

    </LogProvider>
  </React.StrictMode>
)
