import React,{useState} from "react";
import './product.css';
import { useDispatch } from "react-redux";


const Cards = ({props}) => {
 
//  const [items,setItems] = useState([]);
  // let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
  //  localStorage.setItem("cartItems",JSON.stringify(cartItems));

  //  console.log(props.id)
   const addedToCart = ()=>{
    
    alert("Added to cart");
 
 fetch("http://localhost:3002/cartItems",
 {
  method:"POST",
  body:JSON.stringify(props),
  headers:{
    "Content-Type":"application/json",
  }
 }
 )
    // cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        // cartItems.push(props);

        // localStorage.setItem("cartItems",JSON.stringify(cartItems));
    //  setItems(cartItems)
    //  console.log(cartItems);
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
        <button onClick={()=>addedToCart(props)}>add to cart</button>
      </div>

      
    </div>
  );
};

export default Cards;

// http://localhost:3002/cartItems