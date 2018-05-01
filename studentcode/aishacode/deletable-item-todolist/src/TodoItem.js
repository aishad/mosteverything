import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {

  constructor(props){
    super(props);
    this.state = {highlighted: false}
  }

  highLight = () =>{
    this.setState({highlighted:true})
  }

  removeSelf = () => {
    this.props.deleteItem(this.props.index);  
  }

 swapSelf = () =>{
   this.props.moveItem(this.props.arrItems, 0, this.props.index);
 }

 moveUp = () =>{
  this.props.moveUp(this.props.arrItems, this.props.index)   
 }

  render() {
    return (
      <li style={this.state.highlighted ? {color:"red"}:{}}> 
      {this.props.description}
        <button onClick={this.removeSelf} style={{marginLeft: "20px"}}>
          delete
          </button>
          <button onClick={this.highLight}>
          highlight
        </button>
        <button onClick={this.swapSelf}>
        Swap to the top 
        </button>
        {this.props.index !==0 ? <button onClick={this.moveUp} > Move up one spot</button> : null}
      </li>
    );
  }
}

export default TodoItem;
