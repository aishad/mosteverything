import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Item from './Item.js'
import './App.css';
import {items} from './Data.js'
import {reviewers} from './Data.js'




let renderSellerItems = (sellerId) => {
    let itemsWithId = items.map((el,id)=> {
        el.itemId = id
        return el
    })

    let myItems = itemsWithId.filter((item)=>parseInt(item.sellerId)===parseInt(sellerId))
   return  myItems.map((elem)=>{
   console.log(elem.image)
        return (<div>
       <li>{elem.description}           
      <img height="100px" src={"http://localhost:3000/"+elem.image} />
       <div>{elem.description}</div>
        <div>{elem.price}</div>
        <Link to={"/seller/" + elem.sellerId}> Link to seller </Link>
        <div>Items in stock:{elem.stock}</div>
     <Link to={"/itemdetails/"+ elem.itemId}>View item reviews</Link>
    </li>
       </div>)})
  }

class SellerDetails extends Component {
    render() {
        console.log(this.props)
      return (<div className="card center ">
      <div></div>
        <div>{renderSellerItems(this.props.id)}</div>
      </div>)
    }
  }
  
  export default SellerDetails;


  //filter
  //map
