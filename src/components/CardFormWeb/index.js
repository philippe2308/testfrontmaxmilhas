import React from 'react';
import './style.css';

export const CardFormWeb = ({title, icon, mainText, subText, subSubText, textIcon, actived, onClick, expandedPanel}) => {
  
    return (
        <div onClick={()=>onClick()} className="cardformweb">
            <div className="flexcolumn">
                <div className="cardformweb__title">
                    {title}
                </div>
                <div className="cardformweb__group1 flexrow">
                    <div className="cardformweb__group1__maintext">
                        {mainText}
                    </div>
                    <div className="cardformweb__group2 flexColumn">
                        <div className="cardformweb__group2--subtext">
                            {subText}
                        </div>
                        <div className="cardformweb__group2--subsubtext">
                            {subSubText}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cardformweb__rightcontent flexcolumn">
                <div className="cardformweb__rightcontent__texticon">
                    {textIcon}
                </div>
                <div className="cardformweb__rightcontent__icon">
                    <img  alt="" src={icon} />
                </div>
            </div>
            {(actived)?<div className="expanded__web">
                {expandedPanel}
            </div>:null}
        </div>
    );
  }