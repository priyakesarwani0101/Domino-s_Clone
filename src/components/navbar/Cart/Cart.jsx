import React, { useContext } from 'react'
import './style/cart.css'
import { navContext } from '../Context/NavbarContext'
const Cart = () => {
    const {showcart}=useContext(navContext);
    const {handleCart}=useContext(navContext);
  return (
    <div className='navbar_cart' style={showcart ?{width:"25%"} : {width:"0%"}} onClick={()=>handleCart(false)}>
      
    </div>
  )
}

export default Cart
