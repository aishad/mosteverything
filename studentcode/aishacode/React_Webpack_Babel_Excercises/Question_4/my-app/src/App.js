import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
  constructor(){
  super();
  this.state={};
  }


  click = () =>{
    let inputBox = document.getElementById("input").value;
    let randomNumber = Math.random();
    if (inputBox > randomNumber) window.alert("too high");
    else if (inputBox < randomNumber) window.alert("too low");
    else if (inputBox ===randomNumber) window.alrert("You nailed it!");
  }

  render() {
    return (<form>
    <input type="text" id="input"></input>
    <input type="submit" value ="click" onClick={this.click}></input>
    
    </form>);
    
  }
}

export default App;
