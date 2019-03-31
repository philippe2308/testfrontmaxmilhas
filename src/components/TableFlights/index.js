import React from 'react';
import moment from 'moment';
import './style.css';


const CardHeaderTable =({title, first}) => {
    return (
        <div className="cardHeaderTable" style={{borderLeftWidth:(first)?0:1}}>
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
            <CardHeaderTable title={"Detalhes"} />
            <CardHeaderTable title={"Preço"} />
        </div>
    )
}


const CardRowTable =({title, subtitle}) => {
    return (
        <div className="cardRowTable" style={{}}>
            <div className="cardRowTable__title">
                {title}
            </div>
            <div className="cardRowTable__subTitle">
                {subtitle}
            </div>
        </div>
    )
}
const RowTable =({data}) => {
    const duration=moment.duration(moment(data.arrivalDate).diff(moment(data.departureDate)));
    return (
        <div className="rowTable">
            <CardRowTable title={data.airline} subtitle={data.flightNumber}/>
            <CardRowTable title={moment(data.departureDate).format('HH:mm')} subtitle={data.from}/>
            <CardRowTable title={`${duration._data.hours}H${duration._data.minutes}`} subtitle={`${data.stops===0?'Nenhuma':data.stops} parada${data.stops>1?'s':''}`}/>
            <CardRowTable title={moment(data.arrivalDate).format('HH:mm')} subtitle={data.to}/>
            <CardRowTable title="teste" subtitle="suttext"/>
            <CardRowTable title="teste" subtitle="suttext"/>
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