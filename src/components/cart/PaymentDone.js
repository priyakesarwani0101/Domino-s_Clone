import React from 'react'
import './PaymentDone.css'
import {Link} from 'react-router-dom';

function PaymentDone() {
  return (
    <div className='ord-succ-cont-pk'>
        <div>
            <img src='https://nrifuture.com/wp-content/uploads/2022/03/image_processing20190812-2176-vehbsi.gif' />
            <h1>THANK YOU!</h1>
            <h3>Payment done Successfully!</h3>
            <span>You will be redirected to the home page shortly or click here to return to home page</span>
            <Link to="/"><button><span>Home</span></button></Link>
        </div>
    </div>
  )
}

export default PaymentDone