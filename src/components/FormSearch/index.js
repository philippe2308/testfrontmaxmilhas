import React from 'react';
import {CardFormWeb} from './../CardFormWeb';
import {ButtonGreen} from './../ButtonGreen';
import './style.css';

export const FormSearch = () => {
    return (
      <div className="form">
        <div className="form__web">
          <CardFormWeb 
            title="Sair de" 
            mainText="Belo Horizonte"
            subText="cnf"
            subSubText="confins intl"
            icon={require('../../assets/icons/marker.png')} 
          />
          <CardFormWeb 
            title="Sair de" 
            mainText="Florianópolis"
            subText="fln"
            subSubText=""
            icon={require('../../assets/icons/marker.png')} 
          />
          <CardFormWeb 
            title="Ida" 
            mainText="08"
            subText="Novembro"
            subSubText="2017"
            icon={require('../../assets/icons/calendar.png')} 
          />
          <CardFormWeb 
            title="Volta" 
            mainText="12"
            subText="Novembro"
            subSubText="2017"
            icon={require('../../assets/icons/calendar.png')} 
          />
          <CardFormWeb 
            title="Passageiros" 
            mainText="01"
            subText="adulto"
            subSubText="Classe ecônomica"
            icon={require('../../assets/icons/users.png')} 
          />
          <div className="form__cardButton">
            <ButtonGreen ButtonWhite  title={"Pesquisar"}/>
            {
              //icon={require('../../assets/icons/coins.png')}
            }
          </div>
        </div>
      </div>
    );
  }