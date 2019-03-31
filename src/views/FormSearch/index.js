import React from 'react';
import {CardFormWeb} from './../../components/CardFormWeb';
import {CardFormApp} from './../../components/CardFormApp';
import {ButtonGreen} from './../../components/ButtonGreen';
import {SearchAirport} from './../../components/SearchAirport';
import {DatePicker} from './../../components/DatePicker';
import {Passengers} from './../../components/Passengers';
import moment from 'moment'
import './style.css';

export class FormSearch extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      cardWebActived:-1,
      airportDepartureInput:"",
      airportArravieInput:"",
      airportDeparture:{city:"", airportName:"", airportCode:""},
      airportArravie:{city:"", airportName:"", airportCode:""},
      departureDate:new Date(),
      returnDate:new Date()
    }
  }
  setDepartureAirport(airport){    
    console.log(airport);

    let auxi=airport[1][0].indexOf('-');
    if(auxi<0){
      auxi=airport[1][0].length;
    }
    this.setState({airportDeparture:{
        city:airport[1][0].substring(0,auxi),
        airportName:airport[1][0].substring(auxi+1,airport[1][0].length),
        airportCode:airport[1][1]
      },
      cardWebActived:-1
    });
  }
  setArravieAirport(airport){
    console.log(airport);

    let auxi=airport[1][0].indexOf('-');
    if(auxi<0){
      auxi=airport[1][0].length;
    }
    this.setState({airportArravie:{
        city:airport[1][0].substring(0,auxi),
        airportName:airport[1][0].substring(auxi+1,airport[1][0].length),
        airportCode:airport[1][1]
      },
      cardWebActived:-1
    });
  }
  render(){
    const {
      cardWebActived,
      airportDepartureInput,
      airportArravieInput,
      airportDeparture,
      airportArravie
    }=this.state;
    return (
      <div className="form">
        <div className="form__web">
          <CardFormWeb 
            title="Sair de" 
            mainText={airportDeparture.city}
            subText={airportDeparture.airportCode}
            subSubText={airportDeparture.airportName}
            icon={require('../../assets/icons/marker.png')} 
            actived={cardWebActived===0}
            onClick={()=>{
                if(cardWebActived!==0){
                  this.setState({cardWebActived:0});
                }
              }
            }
            expandedPanel={
              <SearchAirport 
                label="Sair de" 
                value={airportDepartureInput} 
                onChange={(text)=>this.setState({airportDepartureInput:text})}
                selectAirport={(airport)=>this.setDepartureAirport(airport)}
              />
            }
          />
          <CardFormWeb 
            title="Ir para" 
            mainText={airportArravie.city}
            subText={airportArravie.airportCode}
            subSubText={airportArravie.airportName}
            icon={require('../../assets/icons/marker.png')} 
            actived={cardWebActived===1}
            onClick={()=>{
                if(cardWebActived!==1){
                  this.setState({cardWebActived:1});
                }
              }
            }
            expandedPanel={
              <SearchAirport 
                label="Ir para"
                value={airportArravieInput}
                onChange={(text)=>this.setState({airportArravieInput:text})}
                selectAirport={(airport)=>this.setArravieAirport(airport)}
              />
            }
          />
          <CardFormWeb 
            title="Ida" 
            mainText="08"
            subText="Novembro"
            subSubText="2017"
            icon={require('../../assets/icons/calendar.png')} 
            actived={cardWebActived===2}
            onClick={()=>{
                if(cardWebActived!==2){
                  this.setState({cardWebActived:2});
                }
              }
            }
            expandedPanel={
              <DatePicker/>
            }
          />
          <CardFormWeb 
            title="Volta" 
            mainText="12"
            subText="Novembro"
            subSubText="2017"
            icon={require('../../assets/icons/calendar.png')} 
            actived={cardWebActived===3}
            onClick={()=>{
                if(cardWebActived!==3){
                  this.setState({cardWebActived:3});
                }
              }
            }
            expandedPanel={
              <DatePicker/>
            }
          />
          <CardFormWeb 
            title="Passageiros" 
            mainText="01"
            subText="adulto"
            subSubText="Classe ecônomica"
            icon={require('../../assets/icons/users.png')}
            actived={cardWebActived===4}
            onClick={()=>{
                if(cardWebActived!==4){
                  this.setState({cardWebActived:4});
                }
              }
            }
            expandedPanel={
              <Passengers/>
            }
          />
          <div className="form__cardButton">
            <ButtonGreen ButtonWhite  title={"Pesquisar"}/>
            {
              //icon={require('../../assets/icons/coins.png')}
            }
          </div>
        </div>
        <div className="form__app">
          <CardFormApp 
            mainText="cnf - fln"
            icon={require('../../assets/icons/marker.png')} 
          />
          <CardFormApp 
            mainText="08"
            text="nov 2017"
            icon={require('../../assets/icons/calendar.png')} 
          />
          <CardFormApp 
            mainText="08"
            text="nov 2017"
            icon={require('../../assets/icons/calendar.png')} 
          />
          <CardFormApp 
            mainText="2"
            icon={require('../../assets/icons/users.png')} 
          />
        </div>
      </div>
    );
  }
}