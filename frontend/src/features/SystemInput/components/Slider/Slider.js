import React, { useState, useRef } from "react"
import "./Slider.css"

const Slider = ({ label = "Default Label" }) => {
    const [ value, setValue ] = useState(50)
    const inputId = useRef(`slider-${Math.random().toString(36).substring(2,9)}`).current

    const handleSlideChange = (event) => {
        const newValue = event.target.value 
        setValue(newValue)
        event.target.style.setProperty('--value', newValue)
    }

    return (
        <div className="slider-container">
            <label className="slider-name" htmlFor={inputId}>
                {label}
            </label>
            <input 
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleSlideChange}
                className="slider"
                id={inputId}
            />
            <div className="slider-value">
                {value}
            </div>
        </div>
    )
}

export default Slider