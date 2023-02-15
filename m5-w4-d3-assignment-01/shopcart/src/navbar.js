import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { faShoppingCart, faRegistered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DisplayProducts from './displayProducts';
import Cart from './cart';
import SignIn from './signin';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Navbar } from "react-bootstrap";

export default function NavBar(props) {
    return (
        <Router>
            <div className="navbar p-5 bg-info">
                <h1>
                    <Link to="/" className="text-decoration-none text-white">
                    <span className="px-2">Shop 2</span> 
                    <FontAwesomeIcon icon={faRegistered} className="fas fa-lg text-white"/>eact</Link>
                </h1>
                
                <p className="text-white">
                <Link to="/showcart">
                    <FontAwesomeIcon icon={faShoppingCart} className="fas fa-lg mx-3 text-white"/>
                </Link>
                <span className="font-weight-bold text-white">{props.totalValue}</span> items</p>
            </div>
            
            <Switch>
                <Route exact path="/">
                <DisplayProducts 
                    products={props.prods}
                    singleProduct={props.singleProduct}
                    onHandleChange={props.handleChange}
                    onIncrement={props.handleIncrement}
                    onDecrement={props.handleDecrement}
                />
                </Route>
                <Route path="/showcart">
                    <Cart prods={props.prods} totalValue={props.totalValue} />
                </Route>
                <Route path="/signin">
                    <SignIn prods={props.prods} />
                </Route>
            </Switch>
        </Router>
    )
} 

