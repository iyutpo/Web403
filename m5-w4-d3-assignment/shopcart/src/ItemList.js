import React, { useState } from 'react';
import cologne from './m5-assignment/products/cologne.jpg';
import iwatch from './m5-assignment/products/iwatch.jpg';
import mug from './m5-assignment/products/mug.jpg';
import wallet from './m5-assignment/products/wallet.jpg';
import "./ItemList.css";
import Modal from 'react-modal';
import {Modal as BModal, Button} from 'react-bootstrap';


function ItemList(props) {
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
    const { listItem } = props;
    

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
        
        <div>
            <button className='mx-1 mt-2 bg-info text-white border-0' 
                    onClick={() => props.onSort(listItem, 'lowest')}
            >Lowest
            </button>
            <button className='mx-1 mt-2 bg-info text-white border-0' 
                    onClick={() => props.onSort(listItem, 'normal')}
            >Normal
            </button>
            <button className='mx-1 mt-2 bg-info text-white border-0' 
                    onClick={() => props.onSort(listItem, 'highest')}
            >Highest
            </button>

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
                        
                        
                        
                    </li>
                ))}
                
            </ul>
            
            
        </div>
        
    );
}

export default ItemList;
