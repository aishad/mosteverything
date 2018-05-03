import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      inputValue: "",
      messages: [{username : "ASD",contents:"FGDFS"}],
      nickname: false
    }
  }
  componentDidMount=()=>{
    setInterval(this.getMessages(), 500)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let body = {
        username: this.state.username,
        contents: this.state.inputValue
      }
    fetch('/sendmessage', {
      method: 'POST',
      body: JSON.stringify(body) })
      .then(e=> e.text())
      .then(e=> console.log(e))
      this.setState({messages: this.state.messages.concat(body)})
     }

  handleNickname = (event) => {
       event.preventDefault()
       this.setState({nickname: true})
     }
    
  handleInputNickname = (event) => {
    this.setState({username: event.target.value})
  }

  handleInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }


  getMessages = () =>{
    fetch('/messages')
    .then(response=>response.text())
    .then( msgs =>{
      if (!msgs) msgs = []
      this.setState({messages: JSON.parse(msgs)})
    })

  }

  renderMessages = () =>{
    return this.state.messages.map(msg=>(<li>{msg.username} : {msg.contents}</li>))
  }

  render() {
    if (this.state.nickname === false) {
      return(
        <div> 
          <form onSubmit={this.handleNickname}>
          Enter your nickname:
              <input type="text" onChange={this.handleInputNickname}>
              </input>
              <input type="submit"></input>
            </form>
        </div>
      )
    } else return (
      <div>
        <div className="topcontainer">
        <ul>{this.renderMessages()}</ul>
        </div>
        <div className="botcontainer">
      
          <form onSubmit={this.handleSubmit}>
            <div className="chat">
              <input type="text" 
              value={this.state.inputValue}
              onChange={this.handleInput}>
              </input>
              <input type="submit"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;