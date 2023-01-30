import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import PlusOneButton from './PlusOneButton';
import ItemList from './ItemList';


import cologne from './m5-assignment/products/cologne.jpg';
import iwatch from './m5-assignment/products/iwatch.jpg';
import mug from './m5-assignment/products/mug.jpg';
import wallet from './m5-assignment/products/wallet.jpg';





class Item {
  constructor(image, name, quanity) {
    this.quanity = quanity;
    this.image = image;
    this.name = name;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [
          {
            image: cologne,
            quantity: 0,
            item_name: 'Unisex Cologne',
          },
          {
            image: iwatch,
            quantity: 0,
            item_name: 'Apple iWatch',
          },
          {
            image: mug,
            quantity: 0,
            item_name: 'Unique Mug',
          },
          {
            image: wallet,
            quantity: 0,
            item_name: 'Mens Wallet',
          },
        ],
        login: false,
        data: null,
        picture: '',
    }
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook(response) {
    if (response.accessToken) {
      this.setState({ login: true });
    } else {
      this.setState({ login: false });
    }
  }

  
  // render function here
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Shop to React
            <FontAwesomeIcon icon={faShoppingCart} />
            0 items
          </p>
          
        </header>

        <ItemList />

      </div>
    );
  }
}



export default App;
