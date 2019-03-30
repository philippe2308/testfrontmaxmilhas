import React from 'react';
import './style.css';

export const ButtonGreen = ({title, icon}) => {
  
    return (
        <div className="buttonGreen">
            <div className={"buttonGreen__icon"}>
                    <img  alt="" src={icon} />
            </div>
            <span className={"buttonGreen__title"}>
                {title} 
            </span>
        </div>
    );
  }