import React from 'react';
import './style.css';

export const Input = ({label, value, onChange}) => {
  
    return (
        <div className="input">
            <div className="input__label">
                {label}
            </div>
            <input className="input__textField" type="text" value={value} onChange={onChange} />
        </div>
    );
  }