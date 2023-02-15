import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Cart(props) {
    return (
        <div className="m-5 px-5 w-75">
            <h2>Your Cart Items</h2>
            {props.prods.map(prod => {
                if (prod.value > 0) {
                    return (
                        <div key={prod.id} className="border">
                            <img src={prod.image} alt={prod.desc} width="150" />
                            
                            <p className="qty d-inline mx-5">Quantity: {prod.value}</p>
                            <p className="px-4">{prod.desc}</p>
                        </div>
                    )
                } 
            })}
            <CheckOutBtn totalValue={props.totalValue} />
        </div>
    )
}

const CheckOutBtn = ({totalValue}) => {
    return (
        totalValue > 0 ?
        <Link to="/signin">
            <Button className="mt-4">Check Out</Button>
        </Link> 
        : 
        <React.Fragment>
            <h4>There are {totalValue} items in your cart.</h4>
            <Link to="/">
                <Button className="mt-4 bg-success">Continue Shop</Button>
            </Link>
        </React.Fragment>
    )
    
}