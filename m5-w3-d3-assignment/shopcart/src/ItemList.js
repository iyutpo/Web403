import React, { useState } from 'react';
import cologne from './m5-assignment/products/cologne.jpg';
import iwatch from './m5-assignment/products/iwatch.jpg';
import mug from './m5-assignment/products/mug.jpg';
import wallet from './m5-assignment/products/wallet.jpg';
import "./ItemList.css";
import {Modal, Button} from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Checkout';

const NewPage = () => {
    return (
        <div>
            <h1>This is my new page</h1>
        </div>
    )
}


function ItemList() {
    const [items, setItems] = useState([
        { id: 0, name: 'Unisex Cologne', image: cologne, quantity: 0, open: false },
        { id: 1, name: 'Apple iWatch', image: iwatch, quantity: 0, open: false },
        { id: 2, name: 'Unique Mug', image: mug, quantity: 0, open: false },
        { id: 3, name: 'Mens Wallet', image: wallet, quantity: 0, open: false },
    ]);
    const [openImageId, setOpenImageId] = useState(null);
    const toggleModal = (id) => {
        setOpenImageId(id === openImageId ? null : id);
    }
    

    // handlers
    function handleOnclickPlus(id) {
        let new_qty = items[id].quantity;
        let updatedItems = [...items];
        let index = updatedItems.findIndex(item => item.id === id);
        updatedItems[index] = {...updatedItems[index], quantity: new_qty + 1};
        setItems(updatedItems);
    }

    function handleOnclickMinus(id) {
        let new_qty = items[id].quantity;
        let updatedItems = [...items];
        let index = updatedItems.findIndex(item => item.id === id);
        updatedItems[index] = {...updatedItems[index], quantity: new_qty - 1};
        setItems(updatedItems);
    }

    function handleChange(e, id) {
        let newItems = [...items];
        newItems[id][e.target.quantity] = e.target.value;
        setItems(newItems);
    }


    return (
        <BrowserRouter>
        
            <div>
                <ul class="list-group">
                    {items.map(item => (
                        <li className="list-group-item d-flex align-items-start" key={item.id}>
                            {item.name}
                            <img src={item.image} alt="" onClick={() => toggleModal(item.id)}/>
                            {/* Pop up Image */}
                            <div id='myModal' className='modal'>
                                <Modal isOpen={item.id === openImageId} onRequestClose={() => toggleModal(null)} > 
                                    <span class="close">&times;</span>
                                    <img src={item.image} className='modal-content'/>
                                    <div id="caption">Rating: 3.5/5</div>
                                </Modal>
                            </div>
                            
                            <span>quantity:  
                                <input value={item.quantity}
                                        onChange={(event) => handleChange(event, item.id)} />
                            </span>
                            <button onClick={() => handleOnclickPlus(item.id)}>+</button>
                            <button onClick={() => handleOnclickMinus(item.id)}>-</button>
                            <Cart  />
                        </li>
                    ))}
                    
                </ul>
                
                
            </div>
        </BrowserRouter>
        
    );
}

export default ItemList;
