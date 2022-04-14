import React from "react";
import './style.css';
import imgWater from './images/water.svg'
import imgElectricity from './images/electricity.svg'
import data from "../../smartHomeData";


const Energy = () => {
    return (

        <div className="energy">
				<div className="energy__source">
					<div className="energy__icon">
						<img src={imgElectricity} />
					</div>
					<div className="energy__consumption">
						<div className="energy__description">Elektřina</div>
						<div className="energy__value">{data.energyConsumption.electricity}</div>
					</div>
				</div>
				<div className="energy__source">
					<div className="energy__icon">
						<img src={imgWater} />
					</div>
					<div className="energy__consumption">
						<div className="energy__description">Voda</div>
						<div className="energy__value">{data.energyConsumption.water}<sup>3</sup></div>
					</div>
				</div>
			</div>

    )          
};

export default Energy;