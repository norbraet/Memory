
import React, { useContext } from 'react'
import './LogArea.css'
import StatusContext from '../../context/StatusContext'

const Footer = () => {
  const { status } = useContext(StatusContext)

  return (
    <div className="log-area container-centar">
      <p>Status: {status}</p>
    </div>
  )
}

export default Footer
