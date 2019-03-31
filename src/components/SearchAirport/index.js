import React from 'react';
import {CardAirport} from './../CardAirport';
import {Input} from './../Input';
import airportList from './airports.json';
import './style.css';

export const SearchAirport = ({label,value,onChange,selectAirport}) => {
    const{airports}=airportList;
    let count=0;
    return (
        <div className="searchAirport">
            <Input label={label} value={value} onChange={(event)=>onChange(event.target.value)}/>
            {
                Object.entries(airports).map((airport)=>{
                    if(count>=3||value===""||value===" "){
                        return null;
                    }
                    if(airport[1][0].toUpperCase().indexOf(value.toUpperCase())>=0||airport[1][1].toUpperCase().indexOf(value.toUpperCase())>=0){
                        count++;
                        return <CardAirport onClick={()=>selectAirport(airport)} name={airport[1][0]} code={airport[1][1]}/>
                    }
                    return null
                    
                })
            }
        </div>
    );
  }