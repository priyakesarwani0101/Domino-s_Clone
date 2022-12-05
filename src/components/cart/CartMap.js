import React from 'react'

export const CartMap = ({props,func}) => {

    const increaseCount= async ()=>{
        await  fetch(`http://localhost:3002/cartItems/${props.id}`,
        {
         method:"PATCH",
         body:JSON.stringify({
           quantity:(props.quantity)+1
         }),
         headers:{
           "Content-Type":"application/json",
         }
        }
           )
              
               func("http://localhost:3002/cartItems")
       }

       const handleRemoveCart= async()=>{
       
        
        
    await   fetch(`http://localhost:3002/cartItems/${props.id}`,
        {
         method:"DELETE",

         headers:{
           "Content-Type":"application/json",
         }
        }
        )
        func("http://localhost:3002/cartItems")
        
    }

  return (
    <div className='cartItem-container-pk box-shadow-pk'>
        <div className='cartItem-image-pk'>
            <img className='cursor-pointer-pk' src={props.image} />
        </div>
        <div className='cartItem-desc-pk'>
            <div>
                <h4 className='cart-item-title-pk'>{props.title}</h4>
                <span className='cart-item-desc-pk'>Med Indi Tandoori Paneer + Peppy Paneer + 2 Garlic Bread +2 Pepsi</span>
            </div>
            <div className='cartItem-price-buttons-pk'>
                <span className='cartItem-price-pk'>₹ {props.price*(props.quantity)}</span>
                <div className='cartItem-buttons-pk'>
                    <div className='cursor-pointer-pk' onClick={handleRemoveCart} ></div>
                    <span>{props.quantity}</span>
                    <div className='cursor-pointer-pk' onClick={increaseCount}></div>
                </div>
            </div>
        </div>
    </div>
  )
}
