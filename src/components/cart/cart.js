import React, { useContext } from 'react'
import './cart.css'
import {Link} from  'react-router-dom'
import { addressContext } from './addressContext/AddressContext'

export default function Cart() {
    const {adressfunction} =useContext(addressContext);
  return (
    <div className='cartContainer-pk'>
        <div className='cartPage-leftDiv-pk'>
            <div className='cartPage-left-topDiv-pk'><span>1 Item you have selected</span>
                <div><button className='cursor-pointer-pk'><span>Explore Menu</span></button></div>
            </div>
            
            <div className='cartItem-container-pk box-shadow-pk'>
                <div className='cartItem-image-pk'>
                    <img className='cursor-pointer-pk' src='https://images.dominos.co.in/cart/4623-CMB1210.jpg' />
                </div>
                <div className='cartItem-desc-pk'>
                    <div>
                        <h4 className='cart-item-title-pk'>Meal for 4: Indi Tandoori Paneer & Peppy Paneer Combo</h4>
                        <span className='cart-item-desc-pk'>Med Indi Tandoori Paneer + Peppy Paneer + 2 Garlic Bread +2 Pepsi</span>
                    </div>
                    <div className='cartItem-price-buttons-pk'>
                        <span className='cartItem-price-pk'>₹ 1099.00</span>
                        <div className='cartItem-buttons-pk'>
                            <div className='cursor-pointer-pk'></div>
                            <span>1</span>
                            <div className='cursor-pointer-pk'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='cartPage-rightDiv-pk'>
            <div className='cartPage-right-topDiv-pk'><span>Choose a delivery address</span></div>

            <div className='address-container-pk box-shadow-pk'>
                <div className='adrs-icon-div-pk'><div></div></div>
                <div className='adrs-wrpr-div-pk'>
                    <div className='current-adrs-div-pk'>
                        <p className='current-heading-pk '>Current Address</p>
                        <p className='current-adrs-pk'>Shivaji Nagar, Jhansi</p>
                    </div>
                    {/* <div className='edit-adrs-pk'>Edit Address</div> */}
                </div>
                {/* <div className='change-adrs-btn-pk'><button className='btn-green-pk'>Change</button></div> */}
            </div>
            <div className='cartPage-right-topDiv-pk'><span>Offers</span></div>

            <div className='select-offer-div-pk box-shadow-pk'>
                <div className='offer-icon-pk'></div>
                <div className='offer-text-pk'>
                    <span className='offer-text-upper-pk'>Select offer / Apply coupon</span>
                    <span className='offer-text-lower-pk'>Get discount with your order</span>
                </div>
                <div className='offer-text-arrow-pk'></div>
            </div>
            <div className='cartPage-right-topDiv-pk'><span>Price Details</span></div>

            <div className='price-details-div-pk box-shadow-pk'>
                <div className='price-text-wrpr-pk'>
                    <span>Sub Total</span>
                    <span>₹ 818.00</span>
                </div>
                <div className='price-text-wrpr-pk'>
                    <span>Discount</span>
                    <span>-</span>
                </div>
                <div className='price-text-wrpr-pk'>
                    <span className='tax-span-tag-pk'>
                        Taxes and Charges
                        <div className='tax-info-div-pk'><b>i</b></div>
                    </span>
                    <span>₹ 75.90</span>
                </div>
                <div className='break-line-pk'></div>
                <div className='price-text-wrpr-pk'>
                    <span className='text-bold-pk'>Grand Total</span>
                    <span className='text-bold-pk'>₹ 893.90</span>
                </div>
                <div className='break-line-pk'></div>
                <div className='place-btn-div-pk'>
                    <Link to='/address'><button onClick={()=>adressfunction(true)}>Place Order</button></Link>  
                    {/* button */}
                </div>
            </div>
        </div>
    </div>
  )
}
