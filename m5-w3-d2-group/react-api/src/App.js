import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }
  
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data})
    }).catch(console.log)
  }


  render() {
    if (!this.state.data) {
      return <p>Loading ... </p>
    }
    return <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
  }

  
}


export default App;
