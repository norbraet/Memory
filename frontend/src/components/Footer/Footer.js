
import React from 'react'
import './Footer.css'

const Footer = ({ status }) => {
  return (
    <footer>
      <div className="container-centar">
        <p>Status: {status}</p>
      </div>
    </footer>
  )
}

export default Footer
