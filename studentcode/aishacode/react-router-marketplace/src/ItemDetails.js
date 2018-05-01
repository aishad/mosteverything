import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Item from './Item.js'
import './App.css';
import {items} from './Data.js'
import {reviewers} from './Data.js'
import ReviewerDetails from './ReviewerDetails.js'

let renderReviews = (id)=>{
  let myItem = items[id];
  return myItem.reviews.map((elem)=> (
    <div>
      <li>{elem.reviewerId}: {elem.description}</li>
      <Link to={"/reviewerdetails/"+elem.reviewerId}>View other reviews by</Link>
    </div>
    ));
}
 
 class ItemDetails extends Component {
    render() {
      console.log(this.props)
      return (<div className="card center ">
      <div></div>
        <div>{renderReviews(this.props.itemId)}</div>
      </div>)
    }
  }
  
  export default ItemDetails;