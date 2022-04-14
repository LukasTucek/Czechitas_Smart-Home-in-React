import React from "react";
import './style.css';
import Light from "../Light";
//import Dashboard from "../Dashboard";

const Lights = ( {name, state} ) => {
    return (

        <div className="lights">

            <Light name={name} state={state} />

        </div>
    )           
};

export default Lights;