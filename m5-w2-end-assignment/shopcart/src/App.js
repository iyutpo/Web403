import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
    }
  }

  // define your handlers here
  // handleOnclickPlus = () => {

  // }

  // handleOnclickMinus = (item) => {
  //   let new_qty = this.state.items.filter((i) => { return i.item_name.toLocaleLowerCase() === item.toLocaleLowerCase(); });
  //   this.setState({ quantity: new_qty[0].quantity - 1 });
  // }

  // handleQuantityChange = (event) => {
  // }


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

        {/* <ul class="list-group">
          <li className="list-group-item d-flex align-items-start">
            Unisex Cologne <br></br>
            <img src={cologne} alt="" />
            <span>quantity:  
              <input value={this.handleOnclickPlus}
              onChange={this.handleQuantityChange} />
            </span>
            <button onClick={() => this.handleOnclickPlus('Unisex Cologne') }>+</button>
            <button onClick={this.handleOnclickMinus('Unisex Cologne')}>-</button>
          </li>
          <li className="list-group-item d-flex align-items-start">
            Apple iWatch <br></br>
            <img src={iwatch} alt="" ></img>
            <span>quantity:  <input value={this.state.quantity} onChange={this.handleQuantityChange} /></span>
            <button onClick={this.handleOnclickPlus}>+</button>
            <button onClick={this.handleOnclickMinus}>-</button>
          </li>
          <li className="list-group-item d-flex align-items-start">
            Unique Mug <br></br>
            <img src={mug} alt="" ></img>
            <span>quantity:  <input value={this.state.quantity} onChange={this.handleQuantityChange} /></span>
            <button onClick={this.handleOnclickPlus}>+</button>
            <button onClick={this.handleOnclickMinus}>-</button>
          </li>
          <li className="list-group-item d-flex align-items-start">
            Mens Wallet <br></br>
            <img src={wallet} alt="" ></img>
            <span>quantity:  <input value={this.state.quantity} onChange={this.handleQuantityChange} /></span>
            <button onClick={this.handleOnclickPlus}>+</button>
            <button onClick={this.handleOnclickMinus}>-</button>
          </li>
        </ul> */}

      </div>
    );
  }
}



// define forms here
function ItemForm(props) {
  return (
    <div>

    </div>
  )
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Shop to React
//           <FontAwesomeIcon icon={faShoppingCart} />
//           0 items
//         </p>
        
//       </header>

//       <ul class="list-group">
//         <li class="list-group-item d-flex align-items-start">
//           Unisex Cologne <br></br>
//           <img src={cologne} alt="" />
//           <input placeholder='0'></input> quantity
//         </li>
//         <li class="list-group-item d-flex align-items-start">
//           Apple iWatch <br></br>
//           <img src={iwatch}></img>
//           <input placeholder='0'></input> quantity
//         </li>
//         <li class="list-group-item d-flex align-items-start">
//           Unique Mug <br></br>
//           <img src={mug}></img>
//           <input placeholder='0'></input> quantity
//         </li>
//         <li class="list-group-item d-flex align-items-start">
//           Mens Wallet <br></br>
//           <img src={wallet}></img>
//           <input placeholder='0'></input> quantity
//         </li>
//       </ul>

//     </div>
//   );
// }

export default App;
