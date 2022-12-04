import React, { useContext } from 'react'
// import {useSelector} from 'react-redux'
import './style/cart.css'
import { navContext } from '../../Context/NavbarContext'
import Cartcard from './Cartcard'
import Flip_cart_card from './Flip_cart_card'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {addToCart} from '../../../../Redux/action'

const Cart = () => {
  // const [cartdata,setCartData]=useState([]);
  const cartData=useSelector((state)=>{
    
    return  state.cartArr;
  })
   
  const toatlAmount=useSelector((state)=>{
    return state.totalAmount;
  })
  console.log(toatlAmount);
  
  const calculateAmount=cartData.reduce(((acc,e)=>{
      return (e.quantity*e.price)+acc;
    }),0)

  

  const dispatch=useDispatch();
  const [subtotal,setSubtotal]=useState(0);
  
    const {showcart}=useContext(navContext);
    const {handleCart}=useContext(navContext);

    // let cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
    // console.log(cartData)
   
useEffect(()=>{
  fetchdata("http://localhost:3002/cartItems")
  //  console.log(cartData)
},[])
const fetchdata=async(url)=>{
try{
  const res= await fetch(url);
const data=await res.json();
dispatch(addToCart(data))
}catch(e){
  console.log(e);
}
}

 
  return (
    <div className='navbar_cart' style={showcart ?{marginRight:"0px"} : {marginRight:"-400px"}}  >
       <div className='cart_div_scroll'>
       {
          cartData.length>0 ? cartData.map((el,index)=>{
            return(
              <Flip_cart_card props={el} index={index} func={fetchdata}/>
            )
          }
          )
          :
          <h1>Cart is Empty</h1>
       }
      </div>
       
       <div className='cart_subtotal_price'>
        <div>
          <div>Subtotal</div>
          <div>₹ {calculateAmount}</div>
        </div>
        <div><Link to='/cart'><button>Checkout</button></Link></div>
       </div>
    </div>
  )
}

export default Cart
