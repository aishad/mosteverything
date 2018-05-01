import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Item from './Item.js'
import './App.css';
import {items} from './Data.js'
import {reviewers} from './Data.js'

let renderReviews = (id)=>{
  let myReviews = items.map((item)=> {
    let filteredReviews = item.reviews.filter((review)=> parseInt(review.reviewerId)===parseInt(id))    
    return filteredReviews;
})
myReviews = myReviews.filter((e) => e.length !==0);
  return myReviews.map((elem)=><div>{elem.map((reviewObj)=><li>{reviewObj.description}</li>)}</div>)
}
  

class ReviewerDetails extends Component {
    render() {
      return (<div className="card center ">
      <div></div>
        <div>{renderReviews(this.props.reviewerId)}</div>
      </div>)
    }
  }
  
  export default ReviewerDetails;