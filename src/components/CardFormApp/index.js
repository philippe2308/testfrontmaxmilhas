import React from 'react';
import './style.css';

export const CardFormApp = ({onClick, icon, mainText, text, actived, expandedPanel,closeExpandedPanel}) => {
  
    return (
        <div onClick={()=>onClick()} className="cardFormApp flexrow">
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
            {(actived)?<div className="expanded__app">
                <div className="expanded__close" onClick={closeExpandedPanel}>Fechar
                </div>
                {expandedPanel}
            </div>:null}
        </div>
    );
  }