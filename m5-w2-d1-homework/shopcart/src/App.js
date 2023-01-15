import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import cologne from './m5-assignment/products/cologne.jpg';
import iwatch from './m5-assignment/products/iwatch.jpg';
import mug from './m5-assignment/products/mug.jpg';
import wallet from './m5-assignment/products/wallet.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Shop to React
          <FontAwesomeIcon icon={faShoppingCart} />
          0 items
        </p>
        
      </header>

      <ul class="list-group">
        <li class="list-group-item d-flex align-items-start">
          Unisex Cologne <br></br>
          <img src={cologne} alt="" />
          <input placeholder='0'></input> quantity
        </li>
        <li class="list-group-item d-flex align-items-start">
          Apple iWatch <br></br>
          <img src={iwatch}></img>
          <input placeholder='0'></input> quantity
        </li>
        <li class="list-group-item d-flex align-items-start">
          Unique Mug <br></br>
          <img src={mug}></img>
          <input placeholder='0'></input> quantity
        </li>
        <li class="list-group-item d-flex align-items-start">
          Mens Wallet <br></br>
          <img src={wallet}></img>
          <input placeholder='0'></input> quantity
        </li>
      </ul>

    </div>
  );
}

export default App;
