import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Chat extends Component {
  
  constructor(props){
    super(props);
    this.state={ username:"", input:"", msg: []};
  }
  
handleChange = (event) =>{
  this.setState({input: event.target.value});
}
   
getResponse = (ind, msg)=>{
  let responses=["tell me more about this...",
                 "sure, go on...",
                "mmmmhmmmm"];

  let newArray = this.state.msg
  newArray.push(this.props.person + this.props.response[ind])
  this.setState({ msg : newArray })
}

handleSubmit = (event) =>{

  let number= Math.floor(Math.random() * (3));
  let contents = this.state.input;
  let newMessage = this.state.msg.concat(this.state.username+":  "+contents);
  var tempFunct = this.getResponse
  setTimeout(()=>{tempFunct(number,newMessage)},1000);
  this.setState({msg: newMessage});
  this.setState({input:''});
  event.preventDefault();
}
 
handleUserName = (event) =>{
  this.setState({username: event.target.value});
  event.preventDefault();
}

  render() {
    if (!this.props.show) return (<div></div>)

    let lify = (elem)=>(<li>{elem}</li>)
    return (

      <div>
        Enter your username here: <input type="text" value={this.state.username} onChange={this.handleUserName}></input>
      <ul style = {{"listStyleType":"none"}}>
        {this.state.msg.map(lify)}
        </ul>
        <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.input} onChange={this.handleChange}></input>
      <input type="submit" value="Enter text" onClick={this.handleClick}></input>
      </form>
      </div>
    );
  }
}

export default Chat;
