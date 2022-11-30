import React from "react";
import './product.css'

const Cards = ({props}) => {
   console.log(props.id)
   const addedToCart = ()=>{
    alert("Added to cart")
   }
  return (
    <div className="card">
      <img 
      src={props.image}
      />
      
     <b> <h3>{props.title}</h3></b>
      
      <h3>Rs: {props.price}</h3>
       <h3>Ratings: {props.ratings } <i class="fa-solid fa-star"></i></h3>
      <div id="cartBtn">
        <button onClick={addedToCart}>add to cart</button>
      </div>
    </div>
  );
};

export default Cards;
