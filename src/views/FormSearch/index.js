import React from 'react';
import {CardFormWeb} from './../../components/CardFormWeb';
import {CardFormApp} from './../../components/CardFormApp';
import {ButtonGreen} from './../../components/ButtonGreen';
import {SearchAirport} from './../../components/SearchAirport';
import {DatePicker} from './../../components/DatePicker';
import {Passengers} from './../../components/Passengers';
import moment from 'moment';
import 'moment/locale/pt-br';
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
      returnDate:new Date(),
      adult:1,
      children:0,
      baby:0
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
      airportArravie,
      departureDate,
      returnDate,
      adult,
      children,
      baby
    }=this.state;
    moment.locale('pt-BR');
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
            mainText={moment(departureDate).format('DD')}
            subText={moment(departureDate).format('MMMM')}
            subSubText={moment(departureDate).format('YYYY')}
            icon={require('../../assets/icons/calendar.png')} 
            actived={cardWebActived===2}
            onClick={()=>{
                if(cardWebActived!==2){
                  this.setState({cardWebActived:2});
                }
              }
            }
            expandedPanel={
              <DatePicker
                onChange={(date)=>this.setState({cardWebActived:-1, departureDate:date})}
                value={departureDate}
              />
            }
          />
          <CardFormWeb 
            title="Volta" 
            mainText={moment(returnDate).format('DD')}
            subText={moment(returnDate).format('MMMM')}
            subSubText={moment(returnDate).format('YYYY')}
            icon={require('../../assets/icons/calendar.png')} 
            actived={cardWebActived===3}
            onClick={()=>{
                if(cardWebActived!==3){
                  this.setState({cardWebActived:3});
                }
              }
            }
            expandedPanel={
              <DatePicker
                onChange={(date)=>this.setState({cardWebActived:-1, returnDate:date})}
                value={returnDate}
              />
            }
          />
          <CardFormWeb 
            title="Passageiros" 
            mainText={`${(adult+children+baby<10)?'0':''}${adult+children+baby}`}
            subText={`adulto${(children>0)?'+criança':''}${(baby>0)?'+bebê':''}`}
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
              <Passengers  
                adult={adult}
                children={children}
                baby={baby}
                onChangeAdult={(event)=>{
                  this.setState({adult: parseInt(event.target.value)});
                }
              }
                onChangeChildren={(event)=>{
                  this.setState({children: parseInt(event.target.value)});
                }}
                onChangeBaby={(event)=>{
                  this.setState({baby: parseInt(event.target.value)});
                }}
              />
            }
          />
          <div className="form__cardButton">
            <ButtonGreen onClick={
              ()=>{
                this.props.onClickSearchFlights({
                  from:airportDeparture.airportCode,
                  to:airportArravie.airportCode,
                  outboundDate:moment(departureDate).format('YYYY-MM-DD'),
                  inboundDate:moment(returnDate).format('YYYY-MM-DD'),
                  cabin:"EC",
                  adults:adult,
                  children:children,
                  infants:baby
                }) 
              }}  title={"Pesquisar"}/>
            {
              //icon={require('../../assets/icons/coins.png')}
            }
          </div>
        </div>
        <div className="form__app">
          <CardFormApp 
            mainText={`${airportDeparture.airportCode} - ${airportArravie.airportCode}`}
            icon={require('../../assets/icons/marker.png')} 
            actived={cardWebActived===0||cardWebActived===1}
            onClick={()=>{
                if(cardWebActived!==0&&cardWebActived!==1){
                  this.setState({cardWebActived:0});
                }
              }
            }
            expandedPanel={
            <div>
                <SearchAirport 
                  label="Sair de" 
                  value={airportDepartureInput} 
                  onChange={(text)=>this.setState({airportDepartureInput:text})}
                  selectAirport={(airport)=>this.setDepartureAirport(airport)}
                />
                <SearchAirport 
                  label="Ir para"
                  value={airportArravieInput}
                  onChange={(text)=>this.setState({airportArravieInput:text})}
                  selectAirport={(airport)=>this.setArravieAirport(airport)}
                />
              </div>
            }
          />
          <CardFormApp             
            mainText={moment(departureDate).format('DD')}
            text={moment(departureDate).format('MMM YYYY')}
            icon={require('../../assets/icons/calendar.png')} 
            actived={cardWebActived===2}
            onClick={()=>{
                if(cardWebActived!==2){
                  this.setState({cardWebActived:2});
                }
              }
            }
            expandedPanel={
              <DatePicker
                onChange={(date)=>this.setState({cardWebActived:-1, departureDate:date})}
                value={departureDate}
              />
            }
          />
          <CardFormApp 
            mainText={moment(returnDate).format('DD')}
            text={moment(returnDate).format('MMM YYYY')}
            icon={require('../../assets/icons/calendar.png')} 
            actived={cardWebActived===3}
            onClick={()=>{
                if(cardWebActived!==3){
                  this.setState({cardWebActived:3});
                }
              }
            }
            expandedPanel={
              <DatePicker
                onChange={(date)=>this.setState({cardWebActived:-1, returnDate:date})}
                value={returnDate}
              />
            }
          />
          <CardFormApp 
            mainText={`${adult+children+baby}`}
            icon={require('../../assets/icons/users.png')} 
            actived={cardWebActived===4}
            onClick={()=>{
                if(cardWebActived!==4){
                  this.setState({cardWebActived:4});
                }
              }
            }
            expandedPanel={
              <Passengers  
                adult={adult}
                children={children}
                baby={baby}
                onChangeAdult={(event)=>{
                  this.setState({adult: parseInt(event.target.value)});
                }
              }
                onChangeChildren={(event)=>{
                  this.setState({children: parseInt(event.target.value)});
                }}
                onChangeBaby={(event)=>{
                  this.setState({baby: parseInt(event.target.value)});
                }}
              />
            }
          />
          <div className="form__cardButton">
            <ButtonGreen onClick={
              ()=>{
                this.props.onClickSearchFlights({
                  from:airportDeparture.airportCode,
                  to:airportArravie.airportCode,
                  outboundDate:moment(departureDate).format('YYYY-MM-DD'),
                  inboundDate:moment(returnDate).format('YYYY-MM-DD'),
                  cabin:"EC",
                  adults:adult,
                  children:children,
                  infants:baby
                }) 
              }}  title={""} fullWidth/>
            {
              //icon={require('../../assets/icons/coins.png')}
            }
          </div>
        </div>
      </div>
    );
  }
}