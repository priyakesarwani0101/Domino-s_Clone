import React, { useContext } from 'react'
import {useSelector} from 'react-redux'
import './style/cart.css'
import { navContext } from '../../Context/NavbarContext'
import Cartcard from './Cartcard'
import Flip_cart_card from './Flip_cart_card'

const Cart = () => {
  const cartData=useSelector((state)=>state.cartArr);
  // console.log(cartData);
    const {showcart}=useContext(navContext);
    const {handleCart}=useContext(navContext);
  //  filter:"blur(5px)"
  return (
    <div className='navbar_cart' style={showcart ?{width:"400px"} : {width:"0%"}}  >
       <div className='cart_div_scroll'>
        {
        cartData.length > 0 ? cartData.map((el)=><Flip_cart_card props={el}/>)
        :
        <h1>Cart is empty</h1>
       }
      </div>
       
    </div>
  )
}

export default Cart
