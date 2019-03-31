import React from 'react';
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
        <div className="table">
            <div className="headerTable">
                <CardHeaderTable first title={"Companhia"} />
                <CardHeaderTable title={"Partida"} />
                <CardHeaderTable title={"Duração"} />
                <CardHeaderTable title={"Chegada"} />
                <CardHeaderTable title={"Detalhes"} />
                <CardHeaderTable title={"Preço"} />
            </div>
        </div>
    )
}

export const TableFlights = ({}) => {
  
    return (
        <div className="dashboard">
            <HeaderTable/>
        </div>
    );
  }