import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  click = () => {
    let inputBox = document.getElementById("inputBoxID").value;
    if (inputBox ==42) window.alert("this is correct");
    else window.alert("wrong")

  }
  render()
  {
    return (<form>
    <input type="text" id="inputBoxID"></input>
    <input type="submit" value="submit" onClick={this.click}></input>
    </form>);
  }
}


export default App;

// buttonAction = () =>{
//   let inputBox = document.getElementById("inputBoxID").value;
//   if (inputBox ==42) alert("this is correct");
//   else alert("wrong")

// }

// reander(){
//   return (
//     <div className="App">
//     <input id="inputBoxId"/>
//     <button onClick={this.buttonAction}>submit</button>
//   )
// }