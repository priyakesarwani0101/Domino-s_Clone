import React from 'react'
import './PaymenDone.css'

function PaymentDone() {
  return (
    <div className='ord-succ-cont-pk'>
        <div>
            <img src='https://nrifuture.com/wp-content/uploads/2022/03/image_processing20190812-2176-vehbsi.gif' />
            <h1>THANK YOU!</h1>
            <h3>Payment done Successfully!</h3>
            <span>You will be redirected to the home page shortly or click here to return to home page</span>
            <button><span>Home</span></button>
        </div>
    </div>
  )
}

export default PaymentDone