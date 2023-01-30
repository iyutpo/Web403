import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Contacts from './Contacts';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }
  
  // componentDidMount() {
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ contacts: data})
  //   }).catch(console.log)
  // }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users')
        .then(res => {
          res.json()
        })
        .then((data) => {
          this.setState({ contacts: data});
        }).catch(console.log)
  }

  render() {
    if (!this.state.data) {
      return <Contacts>hello</Contacts>
    }
    return <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
  }

  
}


export default App;
