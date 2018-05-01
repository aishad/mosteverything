import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { sw: false };
  }

  switch = () => {
    this.setState({ sw: !this.state.sw });

  }
  render() {
    if (this.state.sw) {
      return (<button onClick={this.switch}>Click me!</button>);
    }
    return (<button onClick={this.switch}>No, now click me!</button>);
  }
}
export default App;


// constructor(){
//   super();
//   this.state = { showButtonOne: true }
// }

// toggle = () => {
//   this.setState({ showButtonOne: !this.state.showButtonOne })
// }
// render(){
//   if(this.state.showButtonOne) {return <button onClick={this.toggle}>button1</button>}
//    else{ return <button onClick={this.toggle}>button2</button>)
//   }
// }