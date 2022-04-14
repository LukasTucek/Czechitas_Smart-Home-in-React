import React from "react";
import './style.css';
import Light from "../Light";

const Lights = ( {lights} ) => {

    
    return (

        <div className="lights">

            { lights.map(lights => <Light name={lights.name} state={lights.state} key={lights.id} />) }

        </div>


    )           
};

export default Lights;