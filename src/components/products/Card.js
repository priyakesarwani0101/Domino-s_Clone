import React,{useState} from "react";
import './product.css';
import { useDispatch ,useSelector} from "react-redux";
import { addToCart } from "../../Redux/action";

const Cards = ({props}) => {
 

  const cartData=useSelector((state)=>{
    return  state.cartArr;
  })

  const dispatch=useDispatch();
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

 
 const fetchdata=async(url)=>{
  try{
    const res= await fetch(url);
  const data=await res.json();
  dispatch(addToCart(data))
  }catch(e){
    console.log(e);
  }
  }
  fetchdata("http://localhost:3002/cartItems")
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
      
     <b> <h3 style={{textAlign:"center"}}>{props.title}</h3></b>
      
      <h3 style={{textAlign:"center"}}>Rs: {props.price}</h3>
       <h3 style={{textAlign:"center"}}>Ratings: {props.ratings } <i class="fa-solid fa-star"></i></h3>
      <div id="cartBtn">
        {/* <Button /> */}
        <button>Details</button>
        <button onClick={()=>addedToCart(props)}>Add to cart</button>
      </div>

      
    </div>
  );
};

export default Cards;

// http://localhost:3002/cartItems