import React from "react";
import './style.css';
import lightOff from './images/light-off.svg'
//import lightOn from './images/ligt-on.svg'

const Light = ( {name, state} ) => {
    return (

        <div className="light">
                <div className="light__icon">
                    <img src={lightOff} />
                </div>
                <div className="light__name">
                    {name} a {state}
                </div>
        </div>
    )          
};

export default Light;