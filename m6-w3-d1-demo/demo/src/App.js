import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react'
import BarChart from './BarChart';
import Scene from './Scene';
import TreeApp from './Tree';



const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/bar" component={BarChart} />
          <Route exact path="/" component={Scene} />
          <Route exact path="/tree" component={TreeApp} />
        </Switch>
      </BrowserRouter>
    </div>
    
  );
};

export default App;
