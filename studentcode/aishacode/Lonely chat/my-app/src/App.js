import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat';

class App extends Component {

  constructor(props){
    super(props);
    this.state={showLeft: false, showRight: false, person1Name: "Josie", person2Name:"Luis"}
  }


  toggleRight = () =>{
    this.setState({showRight:!this.state.showLeft})
  }

  toggleLeft = () =>{
    this.setState({showLeft:!this.state.showRight})

  }
  render() {
    
    return (
      <div style = {{"display":"flex"}}>
      <div>
      <button onClick={this.toggleLeft}>Toggle Left</button>
      <button onClick={this.toggleRight}>Toggle Right</button>
      </div> 
      <Chat person ="jodie: "
      response={["whatsup","im done","so tired"]} show={this.state.showLeft}/> 
      <Chat person="lucas: " response={["can't","dont","whyyyyy"]} show={this.state.showRight}/>
      </div>
    );
  }
}

export default App;




