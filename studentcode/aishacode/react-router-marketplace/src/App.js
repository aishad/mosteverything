import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Item from './Item.js'
import './App.css';
import {items} from './Data.js'
import ItemDetails from './ItemDetails'
import {reviewers} from './Data.js'
import ReviewerDetails from './ReviewerDetails.js'
import SellerDetails from './SellerDetails.js'


// let items = [{
//   description: "Nice boats. 50% off. wow.",
//   price: 10000,
//   image: "boat.png",
//   sellerId: 0
// },
// {
//   description: "Lawn chairs",
//   price: 50,
//   image: "lawnchair.jpg",
//   sellerId: 1
// }
// ]

let renderAllItems = () => {
  
let renderedItems =  items.map((item, idx) => (<Item
    price={item.price}
    sellerId={item.sellerId}
    imageLocation={item.image}
    description={item.description}
    stock={item.stock}
    reviews={item.reviews}
    itemId={idx}
   // reviewerId={item.reviews.reviewerId}
    />))
    return (<div>{renderedItems}</div>)
}

let renderItemDetails = routerData =>{
  return (<ItemDetails itemId={routerData.match.params.itemId} />)
}

let renderReviewerDetails = routerData =>{
  // let theWholeItem = items[routerData.match.params.id]
  return (<ReviewerDetails reviewerId={routerData.match.params.reviewerId} />)

}
let renderSeller = routerData => {
  // the .id is the same as the :id from the Route below. 
  // You can give it any name, but they have to match.
  // For example, routerData.match.params.uniqueID would be fine too
  // But you would have to modify the Route below to /seller/:uniqueID
  return (<Seller sellerId={routerData.match.params.sellerId} />)

}

let renderSellerDetails = routerData =>{
  return (<SellerDetails id={routerData.match.params.id} />)
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={renderAllItems} />
          <Route exact={true} path='/seller/:sellerId' render={renderSeller} />
          <Route exact={true} path='/itemdetails/:itemId' render={renderItemDetails} />
          <Route exact={true} path='/reviewerDetails/:reviewerId' render={renderReviewerDetails}/>
          <Route exact={true} path='/sellerdetails/:id' render={renderSellerDetails} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
