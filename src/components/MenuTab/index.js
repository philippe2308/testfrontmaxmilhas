import React from 'react';
import {Tab} from './../Tab';
import './style.css';

export const MenuTab = ({tabActived,onClickTab}) => {
  
    return (
        <div className="menuTab">
            <Tab actived={tabActived===0} onClick={()=>onClickTab(0)} titleWeb="Selecione seu voo de ida" titleApp="Selecione sua ida"/>
            <Tab actived={tabActived===1} onClick={()=>onClickTab(1)} titleWeb="Selecione seu voo de volta" titleApp="Selecione sua volta"/>
        </div>
    );
  }