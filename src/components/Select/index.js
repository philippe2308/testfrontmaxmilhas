import React from 'react';
import './style.css';

export const Select = ({options, value, onChange}) => {
  
    return (
        <div className="select"  value={value} onChange={onChange}>
            <select>    
                {options.map(option=><option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    );
  }
  export const SelectPassengers = ({title, subTitle, options, value, onChange}) => {
  
    return (
        <div className="selectPassengers">
            <div className="selectPassengers__label">
                <div className="selectPassengers__label__title">
                    {title}
                </div>
                <div className="selectPassengers__label__subTitle">
                    {subTitle}
                </div>
            </div>
            <Select
                value={value}
                onChange={onChange}
                options={options}
            />
        </div>
    );
  }