import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/App/App'
import Header from './components/Header/Header'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header>
        <p className="header-heading">Raspberry PI Control UI</p>
        <ThemeToggle label="Toggle Theme"/>
    </Header>
    <App />
  </React.StrictMode>
);

