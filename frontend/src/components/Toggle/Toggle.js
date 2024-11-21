import React from 'react';
import './Toggle.css'

function Button({ onClick, label }) {
  return (
    <label className="wraper" htmlFor="something">
        <span className="label-text">Some setting</span>
        <div className="switch-wrap">
            <input type="checkbox" id="something" onClick={onClick} />
            <div className="switch"></div>
        </div>
    </label>
  );
}

export default Button;


