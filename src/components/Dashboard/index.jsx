import React from "react";
import './style.css';
import data from "../../smartHomeData";

//import components
import Lights from "../Lights";
import Climate from "../Climate";
import Energy from "../Energy";
import Blinds from "../Blinds";
//import Light from "../Light";

const Dashboard = () => {
    return (

        <main className="dashboard">
        


        {data.map(Lights => <Lights name={Lights.name} state={Lights.state} /> //NEFUNGUJE Uncaught TypeError: _smartHomeData__WEBPACK_IMPORTED_MODULE_2__.default.map is not a function
      )}
          
          <Climate />
          <Blinds />
          <Energy />




        </main>
    )           
};

export default Dashboard;