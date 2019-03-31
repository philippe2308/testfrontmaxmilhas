import React from 'react';
import {SelectPassengers,SelectCabin} from './../Select';
import './style.css';

export const Passengers = ({
    adult,
    children,
    baby,
    cabin,
    onChangeAdult,
    onChangeChildren,
    onChangeBaby,
    onChangeCabin
    }) => {
    return (
        <div>
                <SelectPassengers
                    title={"Adultos"}
                    options={[...Array(11).keys()].slice((children+baby===0)?1:children+baby)}
                    value={adult}
                    onChange={onChangeAdult}
                />
                <SelectPassengers
                    title={"Crianças"}
                    subTitle={"2 a 11 anos"}
                    options={[...Array(adult-baby+1).keys()]}
                    value={children}
                    onChange={onChangeChildren}
                />
                <SelectPassengers
                    title={"Bebês"}
                    subTitle={"0 a 23 meses"}
                    options={[...Array(adult-children+1).keys()]}
                    value={baby}
                    onChange={onChangeBaby}
                />
                <div className="info">
                    A quantidade de crianças e bebês deve ser igual a quantidade de adultos.
                </div>
                <SelectCabin
                    title={"Classe do voo"}
                    options={[{id:'EC',label:'Classe econômica'},{id:'EX',label:'Classe executiva'}]}
                    value={cabin}
                    onChange={onChangeCabin}
                />
        </div>
    );
  }