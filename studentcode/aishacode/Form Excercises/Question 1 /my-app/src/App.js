import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {firstName: '', lastName:''};
  }
 
  handleChangeFirst = (event) => {
    this.setState({firstName: event.target.value});
  }

  handleChangeLast = (event) =>{
    this.setState({lastName: event.target.value});
  }
 
  handleSubmit = (event) => {
    alert('Hello ' + this.state.firstName+" "+this.state.lastName);
    event.preventDefault();
  }
 
  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
          First Name:
          <input type="text" value={this.state.firstName} onChange={this.handleChangeFirst} />
          Last Name:
          <input type="text" value={this.state.lastName} onChange={this.handleChangeLast} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
 }

export default App;
