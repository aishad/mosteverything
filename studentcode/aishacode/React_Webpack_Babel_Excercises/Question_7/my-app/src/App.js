import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {number:0};
 
  }

  countdown = () =>{
    this.setState({number: this.state.number-1})
    if (this.state.number === 0){ clearInterval(this.interval);}
    }

  click = () =>{
    let input = parseInt(document.getElementById("input").value, 10); 
    this.setState({number:input});
    this.interval =  setInterval(this.countdown,1000); 
    }

  render() {

    return (<div>
      <input type="text" id="input"></input>
      <input type="submit" value="click" onClick={this.click}></input>
      <div>{this.state.number}</div>
      </div>);
  }
}



// constructor(){
//   super();
//   this.state={time:null};
// }

// handleClick =()=>{
//   let inputBox = document.getElementById("ib");
//   let countDownFrom = parseInt(inputBox.value);
//   this.setState({time:countDownFrom});

//   var setter = () =>{}
//     if (this.state.time >0){
//     this.setState({time:this.state.time -1})
//   }
// }
//  setInterval(setter, 1000)
// }

// render(){
//   return(
//     <div className="App">
//     <input id="ib"/>
//     <button onClick={this.handleClick}>submit</button>
//     <div>{this.state.time}</div>
//     </div>
//   );
// }

export default App;
