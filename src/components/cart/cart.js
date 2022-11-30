import React from 'react'

export default function Cart() {
  return (
    <div>
        <div className='cartPage-leftDiv-pk'>
            <div className='cartPage-left-topDiv-pk'><span>1 Item you have selected</span>
                <div><button className='cursor-pointer-pk'><span>Explore Menu</span></button></div>
            </div>
            <div className='cartItem-container-pk'>
                <div className='cartItem-image-pk'>
                    <img className='cursor-pointer-pk' src='https://images.dominos.co.in/cart/4623-CMB1210.jpg' />
                </div>
                <div className='cartItem-desc-pk'>
                    <div>
                        <h4 className='cart-item-title-pk'>Meal for 4: Indi Tandoori Paneer & Peppy Paneer Combo</h4>
                        <span className='item-desc-pk'>Med Indi Tandoori Paneer + Peppy Paneer + 2 Garlic Bread +2 Pepsi</span>
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
            <div className='cartItem-container-pk'>
                <div className='cartItem-image-pk'>
                    <img className='cursor-pointer-pk' src='https://images.dominos.co.in/cart/4623-CMB1210.jpg' />
                </div>
                <div className='cartItem-desc-pk'>
                    <div>
                        <h4 className='cart-item-title-pk'>Meal for 4: Indi Tandoori Paneer & Peppy Paneer Combo</h4>
                        <span className='item-desc-pk'>Med Indi Tandoori Paneer + Peppy Paneer + 2 Garlic Bread +2 Pepsi</span>
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
            <div className='address-container-pk'>
                <div className='adrs-icon-div-pk'><div></div></div>
                <div className='adrs-wrpr-div-pk'>
                    <div className='current-adrs-div-pk'>
                        <p className='current-heading-pk'>Current Address</p>
                        <p className='current-adrs-pk'>Shivaji Nagar, Jhansi</p>
                    </div>
                    <div className='edit-adrs-pk'>Edit Address</div>
                </div>
            </div>
            <div className='cartPage-right-topDiv-pk'><span>Offers</span></div>
            <div className='select-offer-div-pk'>

            </div>
            <div className='cartPage-right-topDiv-pk'><span>Price Details</span></div>
            <div className='price-details-div-pk'>

            </div>
        </div>
    </div>
  )
}
