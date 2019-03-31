import React from 'react';
import './style.css';

export const CardAirport = ({name, code, onClick}) => {
  
    return (
        <div className="cardAirport" onClick={()=>onClick()}>
            <div className="airport__name">
                {name}
            </div>
            <div className="airport__code">
                {code}
            </div>
        </div>
    );
  }