import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemList from './ItemList';
import products from './products';
import Checkout from './Checkout';

import mug from './m5-assignment/products/mug.jpg';
import iwatch from './m5-assignment/products/iwatch.jpg';
import cologne from './m5-assignment/products/cologne.jpg';
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
      items: products,
      // items: [
      //   {
      //     image: cologne,
      //     quantity: 0,
      //     item_name: 'Unisex Cologne',
      //   },
      //   {
      //     image: iwatch,
      //     quantity: 0,
      //     item_name: 'Apple iWatch',
      //   },
      //   {
      //     image: mug,
      //     quantity: 0,
      //     item_name: 'Unique Mug',
      //   },
      //   {
      //     image: wallet,
      //     quantity: 0,
      //     item_name: 'Mens Wallet',
      //   },
      // ],
      login: false,
      data: null,
      picture: '',
      sortType: 'lowest',
      itemList: '',
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


  // define onSort funciton
  onSort(itemList, sortType) {
    console.log(itemList);
    itemList.sort((a, b) => {
      switch (sortType) {
        case 'lowest':
          return a.price - b.price;
        case 'highest':
          return b.price - a.price;
        default:
          return a.id - b.id;
      }
    });
    this.setState({ sortType });
  }

  // render function here
  render() {
    return (
      <div className='header bg-info'>
        <Router>
          <ul className='nav mx-2 mb-4'>
          <li>
              <Link to='/'>
                <FontAwesomeIcon icon={faHome} className='fas fa-1x my-3 mr-2 text-white' />
              </Link>
              
            </li>
            <li>
              <Link to='/Checkout'>
                Shop to React <FontAwesomeIcon icon={faShoppingCart} className='fas fa-1x my-3 mr-2 text-white' />
                0 Items
              </Link>
            </li>
            
          </ul>

          {/* Define Routers */}
          <Routes>
            <Route path='/Checkout'>

            </Route>

            <Route path='/' element={<ItemList sortType={this.state.sortType} itemList={this.state.items} onSort={this.onSort}/>} />
          </Routes>
        </Router>
        {/* <ItemList 
          sortType={this.state.sortType}
          itemList={this.state.items}
          onSort={this.onSort.bind(this)}
        /> */}
      </div>
    );
  }
}



export default App;
