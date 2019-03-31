import React from 'react';
import {SelectPassengers} from './../Select';
import './style.css';

export const Passengers = ({}) => {
    const numbers=[1,2,3,4,5,6,7,8,9,10]
    return (
        <div>
                <SelectPassengers
                    title={"Adultos"}
                    options={numbers}
                />
                <SelectPassengers
                    title={"Crianças"}
                    subTitle={"2 a 11 anos"}
                    options={[0,...numbers]}
                />
                <SelectPassengers
                    title={"Bebês"}
                    subTitle={"0 a 23 meses"}
                    options={[0,...numbers]}
                />
        </div>
    );
  }