import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem.js';



class App extends Component {
  constructor() {
    super();
    this.state = { items: [], textEntered: "", highlighter:false}
  }
  handleChange = (event) => {
    this.setState({ textEntered: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ items: this.state.items.concat(this.state.textEntered) })
  }
  itemDeleter = ind => {
    let newItems = this.state.items.filter((item, i) => ind !== i); // Removes the element at index ind
    this.setState({ items: newItems });
  }
  
  makeItem = (text, ind) => {
   
  return  (<TodoItem
        deleteItem={this.itemDeleter}
        description={text}
        index={ind} 
        moveItem = {this.swapElements}
        arrItems = {this.state.items}
        moveUp = {this.moveUpOne}
        />)
  }


  swapElements = (arr, i, j) => {
    let newArr = arr.slice();
    newArr[i] = arr[j];
    newArr[j] = arr[i];
    this.setState({items: newArr})
    return newArr;
   }
   // Example: swapElements([2,4,6], 0, 2) is [6,4,2]
   // Example: swapElements([2,4,6], 0, 1) is [4,2,6]
   // Example: swapElements([2,4,6], 1, 2) is [2,6,4]


   moveUpOne = (arr, i) =>{
    let newArr = arr.slice();
    newArr[i-1] = arr[i];
    newArr[i] = arr[i-1];
    this.setState({items: newArr})
     return newArr;
   }

   //i is the from index, j is the to index

  deleteAll = () =>{
  this.setState({items:[]});
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.items.map((itemText, index) => this.makeItem(itemText, index))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.textEntered} />
          <input type="submit" />
        </form>
        <button type="submit" onClick={this.deleteAll}>Click to delete All </button>
      </div>
    );
  }
}

export default App;
