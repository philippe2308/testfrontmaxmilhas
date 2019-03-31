import React from 'react';
import './style.css';

export const CardFormApp = ({icon, mainText, text}) => {
  
    return (
        <div className="cardFormApp flexrow">
            <div className="flexrow alingCenter">
            <div className="cardFormApp__icon">
                <img  alt="" src={icon} />
            </div>
            <div className="cardFormApp__text--main">
                {mainText}
            </div>
            <div className="cardFormApp__text">
                {text}
            </div>
            </div>
        </div>
    );
  }