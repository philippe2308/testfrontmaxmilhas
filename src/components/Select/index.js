import React from 'react';
import './style.css';

export const Select = ({options, value, onChange}) => {
  
    return (
        <div className="select">
            <select  value={value} onChange={onChange}>    
                {options.map(option=><option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    );
  }
  export const Select2 = ({options, value, onChange}) => {
  
    return (
        <div className="select fullWidtSelect">
            <select  value={value} onChange={onChange}>    
                {options.map(option=><option key={option.id} value={option.id}>{option.label}</option>)}
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
  
  export const SelectCabin = ({title, options, value, onChange}) => {
  
    return (
        <div className="selectCabin">
            <div className="selectCabin__label">
                <div className="selectCabin__label__title">
                    {title}
                </div>
            </div>
            <Select2
                value={value}
                onChange={onChange}
                options={options}
            />
        </div>
    );
  }