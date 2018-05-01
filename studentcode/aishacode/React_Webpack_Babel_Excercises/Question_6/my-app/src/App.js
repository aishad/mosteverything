import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {items:[]};
  }

  click = () => {
    let input = document.getElementById("input").value;
    let items = this.setState({ items: this.state.items.concat(input) })

    }

    makeLi () {
      return this.state.items.map((item) => <li>{item}</li>)
  }

  render() {

    return (<div>
      <input type="text" id="input"></input>
      <input type="submit" value="click" onClick={this.click}></input>
      <div><ul>{this.makeLi()}</ul></div></div>);
  }
}

export default App;

// constructor(){
//   super();
//   this.state{items:["dogs", "cats"]};
// }

// click = () =>{
//   var inputBox = document.getElementById("ib").value;
//   this.setState({
//   items:this.state.items.concat(inputBox)});
//   inputBox.value="";
// }

// render(){
//   var makeLi = item => (<li>{item}</li>);

//   return(<div className="App">
//           <input id="ib"/>
//           <button onClick={this.click}>submit</button>
//           <ul>
//             {this.state.items.map(makeLi)}
//           </ul>
// </div>
//   );
// }