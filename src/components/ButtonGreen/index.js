import React from 'react';
import './style.css';

export const ButtonGreen = ({title, icon,onClick,fullWidth}) => {
  
    return (
        <div className={`buttonGreen ${(fullWidth)?'fullWidth':''}`} onClick={()=>onClick()}>
            <div className={"buttonGreen__icon"}>
                    <img  alt="" src={icon} />
            </div>
            <span className={"buttonGreen__title"}>
                {title} 
            </span>
        </div>
    );
  }