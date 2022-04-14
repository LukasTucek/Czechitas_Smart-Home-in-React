import React from 'react';
import { render } from 'react-dom';
import './style.css';
import data from './smartHomeData';

//import components
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => (
  
    <div className="container">
    
      <Header title='Chytrý dům' />
      <Dashboard data={data}/>

    </div>
  
);

render(<App />, document.querySelector('#app'));
