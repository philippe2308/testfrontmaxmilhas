import React from 'react';
import moment from 'moment';
import {ButtonGreen} from './../ButtonGreen';
import './style.css';


const CardHeaderTable =({title, first, price, detail, web}) => {
    return (
        <div className={`cardHeaderTable ${web?'cardTable--web':''}`} style={{borderLeftWidth:(first)?0:1, minWidth:(price)?200:(detail)?110:0}}>
            {title}
        </div>
    )
}

const HeaderTable=(props) => {
    return(
        <div className="headerTable">
            <CardHeaderTable first title={"Companhia"} />
            <CardHeaderTable title={"Partida"} />
            <CardHeaderTable title={"Duração"} />
            <CardHeaderTable title={"Chegada"} />
            <CardHeaderTable title={"Detalhes"} detail web/>
            <CardHeaderTable title={"Preço"} price web/>
        </div>
    )
}


const CardRowTable =({title, subtitle, web}) => {
    return (
        <div className={`cardRowTable ${web?'cardTable--web':''}`} >
            <div className="cardRowTable__title">
                {title}
            </div>
            <div className="cardRowTable__subTitle">
                {subtitle}
            </div>
        </div>
    )
}

const CardDetailRowTable =({web,app}) => {
    return (
        <div className={`cardRowTable  ${app?'cardTable--app':''} ${web?'cardTable--web':''}`} style={{minWidth:110}}>
            <div className="cardRowTable--detail">
                Detalhes do voo
            </div>
        </div>
    )
}


const CardPriceRowTable =({price, web, app}) => {
    console.log(price);
    const bestPrice=(price.bestPriceAt==='airline')?price.airline:(price.bestPriceAt==='miles')?price.miles:price.ota;
    return (
        <div className={`cardRowTable  ${app?'cardTable--app':''}  ${web?'cardTable--web':''}`} style={{minWidth:200}}>
            <div className="cardRowTable--priceAirline">
                {(price.savingPercentage!==0)?(price.airline.saleTotal!==null)?`${price.airlineName} R$${price.airline.saleTotal}`:'':''}
            </div>
            <ButtonGreen fullWidth={app} title={`R$${bestPrice.saleTotal}`} onClick={()=>console.log('')}/>
            <div className="cardRowTable__savingPercentage" style={{display:(price.savingPercentage===0)?'none':'block'}}>
                Economize {price.savingPercentage.toFixed(0)}% na {(price.bestPriceAt!=='ota')?'':bestPrice.checkout.target}
            </div>
            <div className="cardRowTable--priceAirline" style={{textDecoration:'none'}} >
                {(price.bestPriceAt==='airline')?'Mais economia na cia aérea':(price.bestPriceAt==='miles')?'Exclusivo na Maxmilhas':''}
            </div>
        </div>
    )
}

const RowTable =({data}) => {
    const duration=moment.duration(moment(data.arrivalDate).diff(moment(data.departureDate)));
    return (
        <div  className="rowTable">
            <div className="rowTable--web">
                <CardRowTable title={data.airline} subtitle={data.flightNumber}/>
                <CardRowTable title={moment(data.departureDate).format('HH:mm')} subtitle={data.from}/>
                <CardRowTable title={`${duration._data.hours}H${duration._data.minutes}`} subtitle={`${data.stops===0?'Nenhuma':data.stops} parada${data.stops>1?'s':''}`}/>
                <CardRowTable title={moment(data.arrivalDate).format('HH:mm')} subtitle={data.to}/>
                <CardDetailRowTable web/>
                <CardPriceRowTable web price={data.pricing}/>
            </div>
                <CardPriceRowTable app price={data.pricing}/>
                <CardDetailRowTable app/>
        </div>
    )
}
export const TableFlights = ({flights}) => {
  
    return (
        <div className="table">
            <HeaderTable/>
                {flights.map((flight,index)=><RowTable key={index} data={flight}/>)}
        </div>
    );
  }