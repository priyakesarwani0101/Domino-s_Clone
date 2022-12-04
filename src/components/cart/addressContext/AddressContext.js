import React, { createContext, useState } from 'react'
export const addressContext=createContext();
import Address from '../Address';
import Cart from '../cart';
export const AddressContext = () => {
    
    const [openaddress,setopenAdress]=useState(false);
    const adressfunction=(value)=>{
        setopenAdress(value);
    }

  return (
    <addressContext.Provider value={{adressfunction,openaddress}}>
        <Cart/>
        <Address/>
    </addressContext.Provider>
  )
}
