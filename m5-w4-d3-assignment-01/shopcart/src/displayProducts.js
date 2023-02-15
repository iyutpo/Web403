import { useState } from "react";
import { Modal } from 'react-bootstrap';
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DisplayProducts(props) {
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setShow(true);
        setShowImge(product);
    }

    let prodRows = [];
    props.products.forEach(product => {
        prodRows.push(
            <div key={product.id} className="border border-1 p-3">
                    <h4 className="mx-5">{product.desc}</h4>
                    <img 
                        src={product.image} 
                        width="150" 
                        alt={product.desc} 
                        className="mx-5"
                        onClick={() => handleShow(product)}
                        />
                    <button
                        className="btn btn-secondary mx-2"
                        value={product.value+1}
                        onClick={(event) => props.onHandleChange(event,product)}
                    >
                        <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
                    </button>
                    <button
                        className="btn btn-secondary mx-2"
                        onClick={() => props.onDecrement(product)}
                    >
                    <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
                    </button>
                    <div className="d-inline-block mx-4 text-center">
                    <span className="d-block mb-2">Quantity</span>
                    <span id="qty" className="px-3 py-2 border border-3 d-inline-block">{product.value}</span>
                    </div>
            </div>
        )
    })

    return (
        <div>
        {/*{props.products.map(product => {
            return (
                <div key={product.id} className="border border-1 p-3">
                    <h4 className="mx-5">{product.desc}</h4>
                    <img 
                        src={product.image} 
                        width="150" 
                        alt={product.desc} 
                        className="mx-5"
                        onClick={() => handleShow(product)}
                        />
                    <button
                        className="btn btn-secondary mx-2"
                        onClick={() => props.onIncrement(product)}
                    >
                        <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
                    </button>
                    <button
                        className="btn btn-secondary mx-2"
                        onClick={() => props.onDecrement(product)}
                    >
                    <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
                    </button>
                    <div className="d-inline-block mx-4 text-center">
                    <span className="d-block mb-2">Quantity</span>
                    <span id="qty" className="px-3 py-2 border border-3 d-inline-block">{product.value}</span>
                    </div>
            </div>
            )
        })} */}

        {prodRows}

        <Modal show={show} onHide={handleClose}>
            
            <Modal.Header closeButton>
                <Modal.Title>{showImge.desc}</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <img 
                    src={showImge.image} 
                    width="350" 
                    alt={showImge.desc} 
                    className="mx-5"
                />

                <p><span className="text-dark">Ratings:</span> {showImge.ratings}/5</p>
            
            </Modal.Body>

        </Modal>

            {/*<Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Product Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <form onSubmit={submit}>
                    <label><h5 className="text-info">Rating</h5></label>
                    <select name="rating" className="d-block">
                        <option>Select Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label><h5 className="mt-3 text-info">Comment</h5></label>
                    <textarea name="comment" className="d-block w-50"></textarea>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <input type="submit" value="Submit" className="btn bg-info" variant="primary" onClick={handleClose} />
                    </Modal.Footer>
                </form> 
            </Modal.Body>*/}
            {/*<Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                Submit
                </Button>
            </Modal.Footer> 
            </Modal>*/}
        </div>
    )
}