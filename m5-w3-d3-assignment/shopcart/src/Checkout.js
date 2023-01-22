import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';


function LoginForm() {
    return (
      <form className='border mt-3 mb-5 p-3 bg-white'>
        <label className='m-2'>Name:</label>
        <input type='text' name='name' placeholder='Your name' />
        <label className='m-2'>Email:</label>
        <input type='email' name='email' placeholder='Your Email' />
        <input type='text' value="Login" className='btn bg-success text-white my-3' />
      </form>
    )
  }

  
function Checkout(props) {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
        {values.map((v, idx) => (
            <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
            Check Out
            {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
        ))}
        <React.Fragment>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
            <h3>Please login using one of the following: </h3>
                {/* Login Form */}
                <LoginForm />

                {/* FB Login Button */}
                <FacebookLogin
                  appId='498407135741665'
                  autoLoad={false}
                  fileds='name,email,picture'
                  scope='public_profile,user_friends'
                  callback={responseFacebook}
                  icon='fa-facebook'
                />
        </React.Fragment>
        </>
    );
}



export default Checkout;

