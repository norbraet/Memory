import React from 'react'
import './Button.css'

function Button({ onClick, label, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
