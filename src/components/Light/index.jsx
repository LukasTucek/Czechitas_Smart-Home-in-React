import React, { useState } from 'react';
import './style.css';
import lightOff from './images/light-off.svg'
import lightOn from './images/light-on.svg'


const Light = ( {name, state} ) => {

    const [active, setActive] = useState(state);

    const handleClick = () => {
        setActive(!active);
    }

    return (

        <div className="light" onClick={handleClick}>
                <div className="light__icon">
                    <img src={active ? lightOn : lightOff} />
                </div>
                <div className="light__name">
                    {name}
                </div>
        </div>

    )          
};

export default Light;