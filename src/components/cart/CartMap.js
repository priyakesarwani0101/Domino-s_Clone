import React from 'react'

export const CartMap = (props) => {
  return (
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
  )
}
