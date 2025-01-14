import React from "react";
import './style.css';
import tempImg from './images/temp.svg'
import { useState } from "react";


const Climate = ( {temperature, humidity} ) => {
    
	const [temp, setTemp] = useState(temperature);


	return (

        <div className="climate">
				<div className="climate__icon">
					<img src={tempImg} />
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{temp}&deg;C</div>
					<div className="climate__humidity">Vlhkost vzduchu {humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button" onClick={() => {setTemp(temp + 1 || temp)}}>+ 1</button>
					<button className="button" onClick={() => {setTemp(temp - 1 || temp > 0)}}>- 1</button>
				</div>
		</div>
    )          
};

export default Climate;