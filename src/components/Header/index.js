import React from 'react';
import {ButtonWhite} from './../ButtonWhite';
import './style.css';

export const Header = () => {
    return (
      <div className="header">
        <div className="header__logo">
          <img  alt="" src={require('../../assets/icons/menu.png')} />
          Teste Front
        </div>
        <div className="header__listbutton">
          <ButtonWhite icon={require('../../assets/icons/coins.png')} title={"Venda suas milhas"}/>
          <ButtonWhite icon={require('../../assets/icons/ask.png')} title={"Tire suas dúvidas"}/>
          <ButtonWhite iconCircle icon={require('../../assets/icons/user.png')} title={"Login ou cadastro"}/>
        </div>
      </div>
    );
  }