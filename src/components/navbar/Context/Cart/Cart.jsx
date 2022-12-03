import React, { useContext } from 'react'
// import {useSelector} from 'react-redux'
import './style/cart.css'
import { navContext } from '../../Context/NavbarContext'
import Cartcard from './Cartcard'
import Flip_cart_card from './Flip_cart_card'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

const Cart = () => {
  const [subtotal,setSubtotal]=useState(0);
  // const cartData=useSelector((state)=>state.cartArr);
  // console.log(cartData);
    const {showcart}=useContext(navContext);
    const {handleCart}=useContext(navContext);

    let cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
   
  //   cartData.map((e)=>{
  //     setSubtotal(subtotal+e.price);
  //   })
  
  //  const handleDelete=(value)=>{
  //   setSubtotal(subtotal-value);
  //  }


  //   if(showcart){
  // document.body.style.filter="blur(5px)";
  //   }
  //   else{
  //     document.body.style.filter="blur(0px)";
  //   }
  //  filter:"blur(5px)"
  return (
    <div className='navbar_cart' style={showcart ?{marginRight:"0px"} : {marginRight:"-400px"}}  >
       <div className='cart_div_scroll'>
        {/* {
        cartData.length > 0 ? cartData.map((el)=><Flip_cart_card props={el} func={handleDelete}/>)
        :
        <h1>Cart is empty</h1>
       } */}
      </div>
       
       <div className='cart_subtotal_price'>
        <div>
          <div>Subtotal</div>
          <div>₹ {subtotal}</div>
        </div>
        <div><Link to='/cart'><button>Checkout</button></Link></div>
       </div>
    </div>
  )
}

export default Cart
