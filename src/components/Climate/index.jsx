import React from "react";
import './style.css';
import temp from './images/temp.svg'
import data from "../../smartHomeData";


const Climate = () => {
    return (

        <div className="climate">
				<div className="climate__icon">
					<img src={temp} />
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{data.climate.temperature}&deg;C</div>
					<div className="climate__humidity">Vlhkost vzduchu {data.climate.humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button">+</button>
					<button className="button">-</button>
				</div>
		</div>
    )          
};

export default Climate;