import React, { Component } from 'react';
import './App.css';
import SellerDetails from './SellerDetails.js'
import { Route, BrowserRouter, Link } from 'react-router-dom'



let sellers = [{
  name: "Jack Frost",
  rating: "5 stars",
  sellerId:0
},
{
  name: "Hank Green",
  rating: "2 stars",
  sellerId:1
}
]

let formatSeller = (seller) => {
  return (<div className="card center">
    <div>
      <div>{seller.name}</div>
      <div>{seller.rating}</div>
    <div><Link to={"/sellerdetails/"+ seller.sellerId}>Click to see other items </Link></div>
    </div>
  </div>)
}

class Seller extends Component {
  render() {
    return (
      <div>{formatSeller(sellers[this.props.sellerId])}</div>
    );
  }
}

export default Seller;
