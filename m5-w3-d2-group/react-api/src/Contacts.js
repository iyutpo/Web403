import './App.css';
import React, { Component } from 'react';


const Contacts = ({ ...prop }) => {
    return (
        <div>
            <h1>Contact List</h1>
            {prop.map(({ name, email, catch_phrase }) => {
                <div>
                    <h4>name</h4>
                    <p>email</p>
                    <p>catch_phrase</p>
                </div> 
            })}
        </div>
    )
};


export default Contacts;











