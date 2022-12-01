import { Alert } from 'bootstrap';
import React, { useState } from 'react'
import "./Login.css"

export default function login() {
    
    // let [otp,setOtp] = useState() ;

    const generateOTP = ()=>{
        let digit = '0123456789' ;
        let OTP = '' ;
        for(let i=0;i<4;i++){
            OTP += digit[Math.floor(Math.random()*10)] ;
        }
        alert(OTP) ;
    }
    

  return (
    <div>
        <div>
            <img src='https://pizzaonline.dominos.co.in/static/assets/Dominos_logo.svg' alt='logo' />
            <img src='https://pizzaonline.dominos.co.in/static/assets/login_pizza_image.png' alt='pizza' />
        </div>
        <div className='hd-img' >
            <div className='hd-img_txt' >
                <span>Login</span>
                <p>to unlock awesome new feature</p>
            </div>
            <div className='hd-ing_sbtxt' >
                <div>
                    <img src='https://pizzaonline.dominos.co.in/static/assets/icons/great_food.svg' alt='great-food' />
                    <div>
                        <p>Great</p>
                        <p>Food</p>
                    </div>
                </div>
                <div>
                <img src='https://pizzaonline.dominos.co.in/static/assets/icons/great_offers.svg' alt='great-offer' />
                    <div>
                        <p>Great</p>
                        <p>Offers</p>
                    </div>
                </div>
                <div>
                <img src='https://pizzaonline.dominos.co.in/static/assets/icons/easy_reorder.svg' alt='easy-food' />
                    <div>
                        <p>Easy</p>
                        <p>Reordering</p>
                    </div>
                </div>
            </div>

            <div id='login-div'>
                <div>Login with your valid mobile number</div>
                <div className='inputMobile'>
                    <div>
                        <input className='code' type="type" placeholder="+91" />
                    </div>
                    <div>
                        <input className='mob' type="text" maxLength="10" placeholder='Enter Mobile number' />
                    </div>
                </div>
                <div>
                    <button onClick={generateOTP} id='submit-btn'>submit</button>
                </div>

            </div>

        </div>
    </div>
  )
}
