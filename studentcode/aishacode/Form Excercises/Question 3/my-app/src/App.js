import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={firstName:'', lastName:''}
  }

  handleSubmit = (event) =>{
    alert('Hello ' + this.state.firstName+ " "+this.state.lastName);
    event.preventDefault();
  }

  handleFirstChange = (event) =>{
    this.setState({firstName: event.target.value});
    }


  handleLastChange = (event) =>{
    this.setState({lastName: event.target.value})

    }

  click = (event) =>{
    this.setState({firstName:'', lastName:''});
    event.preventDefault();
  }

  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
      First Name:
      <input type="text" value={this.state.firstName} onChange={this.handleFirstChange} />
      Last Name:
      <input type="text" value={this.state.lastName} onChange={this.handleLastChange} />
     {this.state.firstName !== '' && this.state.lastName !== '' ?  <input type="submit" value="submit" /> :null}
      <input type="submit" value="click to clear" onClick={this.click}></input>
      </form>
    );
  }
}

export default App;
