import React from "react";
import './style.css';
import tempImg from './images/temp.svg'
import data from "../../smartHomeData";
import { useState } from "react";


const Climate = ( {temperature, humidity} ) => {
    
	const [temp, setTemp] = useState(temperature);   //toto mi nefunguje, nezobrazuje se údaj 25° z "data"
	
	return (

        <div className="climate">
				<div className="climate__icon">
					<img src={tempImg} />
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{temp}&deg;C</div>
					<div className="climate__humidity">Vlhkost vzduchu {data.climate.humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button" onClick={() => {setTemp(temp + 1)}}>+ 1</button>
					<button className="button" onClick={() => {setTemp(temp - 1)}}>- 1</button>
				</div>
		</div>
    )          
};

export default Climate;