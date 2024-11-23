
import React, { useContext } from 'react'
import './Footer.css'
import StatusContext from '../../context/StatusContext'

const Footer = () => {
  const { status } = useContext(StatusContext)

  return (
    <footer>
      <div className="container-centar">
        <p>Status: {status}</p>
      </div>
    </footer>
  )
}

export default Footer
