import React, { useContext, useState } from 'react'
 import './Address.css'
 import {Link} from 'react-router-dom'
import { addressContext } from './addressContext/AddressContext'
import { calcLength } from 'framer-motion';
function Address() {
  const {openaddress} =useContext(addressContext);
  const {setopenAdress} =useContext(addressContext);
  const dataObj={
    firstName:"",
    lastName:"",
    email:"",
    address:"",
    city:""
  }
  const [data,setdata]=useState(dataObj);
  const handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  const handleClick =()=>{

    console.log(data);
    localStorage.setItem("userAddress",JSON.stringify(data));
    setopenAdress(false);
    setdata(dataObj);
  }
  return (
    <div className='address_container-pk' style={openaddress ? {marginRight:"0px"} : {marginRight:"-502px"} }>
        <div>
            <h2 className='add-adrs-heading-pk'>Add Address</h2>
            <div className='address-input-field-div-pk'>
                <p>Fill deatils below</p>
                <div className='al-inp-cont-pk'>
                    <div className='flex-inp-div-pk'>
                        <input className='adrs-inp-tag-pk' type='text' placeholder='First name' name='firstName' onChange={handleChange}></input>
                        <input className='adrs-inp-tag-pk' type='text' placeholder='Last name' name="lastName"  onChange={handleChange}></input>
                    </div>
                    <div>
                        <input className='adrs-inp-tag-pk width100-pk' type='email' placeholder='Email' name='email'  onChange={handleChange}></input>
                    </div>
                    <div className='flex-inp-div-pk'>
                        <input className='adrs-inp-tag-pk' type='text' placeholder='Flat No./Building name/Landmark' name='address' onChange={handleChange}></input>
                        <input className='adrs-inp-tag-pk' type='text' placeholder='City' name='city' onChange={handleChange}></input>
                    </div>
                </div>
            </div>
            <div className='adrs-save-btn-div-pk'><Link to="/payment"><button onClick={handleClick}>SAVE & CONTINUE</button></Link></div>
        </div>
    </div>
  )
}
// setopenAdress(false)
export default Address