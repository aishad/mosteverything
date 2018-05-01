import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() { 
    super();
    this.state = {text: "hello"} 
      }
  click = () => {
      this.setState({text : this.state.counter + 1}) 
  }
  render() {  
    return (
    <button onClick={this.click}>{this.state.counter}</button>); }

  }

export default App;

