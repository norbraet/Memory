import React from 'react'
import './Button.css'

function Button({ onClick, label }) {
  return (
    <button className='btn' onClick={onClick}>
      {label}
    </button>
  )
}

export default Button