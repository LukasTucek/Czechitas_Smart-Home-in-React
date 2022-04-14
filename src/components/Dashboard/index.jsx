import React from "react";
import './style.css';

//import components
import Lights from "../Lights";
import Climate from "../Climate";
import Energy from "../Energy";
import Blinds from "../Blinds";

const Dashboard = ( {data} ) => {
    
    return (

        <main className="dashboard">


        <Lights lights={data.lights} />
        <Climate climate={data.climate} />
        <Blinds state={data.binds} />
        <Energy energyConsumption={data.energyConsumption} />



        </main>
    )           
};

export default Dashboard;