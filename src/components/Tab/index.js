import React from 'react';
import './style.css';

export const Tab = ({titleWeb,titleApp, actived, onClick}) => {
  
    return (
        <div onClick={onClick} className={`tab ${actived?"tab--actived":""}`}>
            <div className="tab__title">
                <span className="tab__title--web">
                    {titleWeb}
                </span>
                <span className="tab__title--app">
                    {titleApp}
                </span>
            </div>
        </div>
    );
  }