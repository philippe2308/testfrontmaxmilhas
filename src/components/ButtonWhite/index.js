import React from 'react';
import './style.css';

export const ButtonWhite = ({title, icon, iconCircle}) => {
  
    return (
        <div className="buttonWithe">
            <div className={"buttonWithe__icon"}>
                <div className={iconCircle?"buttonWithe__icon__circle":""}>
                    <img  alt="" src={icon} />
                </div>
            </div>
            <span className={"buttonWithe__title"}>
                {title} 
            </span>
        </div>
    );
  }