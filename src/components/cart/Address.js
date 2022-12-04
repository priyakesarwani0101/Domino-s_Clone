import React, { useContext } from 'react'
 import './Address.css'
 import {Link} from 'react-router-dom'
import { addressContext } from './addressContext/AddressContext'
function Address() {
  const {openaddress} =useContext(addressContext);
  const {setopenAdress} =useContext(addressContext);
  return (
    <div className='address_container-pk' style={openaddress ? {marginRight:"0px"} : {marginRight:"-502px"} }>
        <div>
            <h2 className='add-adrs-heading-pk'>Add Address</h2>
            <div className='address-input-field-div-pk'>
                <p>Fill deatils below</p>
                <div className='al-inp-cont-pk'>
                    <div className='flex-inp-div-pk'>
                        <input className='adrs-inp-tag-pk' type='text' placeholder='First name'></input>
                        <input className='adrs-inp-tag-pk' type='text' placeholder='Last name'></input>
                    </div>
                    <div>
                        <input className='adrs-inp-tag-pk width100-pk' type='email' placeholder='Email'></input>
                    </div>
                    <div className='flex-inp-div-pk'>
                        <input className='adrs-inp-tag-pk' type='text' placeholder='Flat No./Building name/Landmark'></input>
                        <input className='adrs-inp-tag-pk' type='text' placeholder='City'></input>
                    </div>
                </div>
            </div>
            <div className='adrs-save-btn-div-pk'><Link to="/payment"><button onClick={()=>setopenAdress(false)}>SAVE & CONTINUE</button></Link></div>
        </div>
    </div>
  )
}

export default Address