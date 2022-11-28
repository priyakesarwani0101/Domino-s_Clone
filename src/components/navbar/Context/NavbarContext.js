import React,{ createContext, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import LowerNav from '../Navbar/LowerNav';
import Sidebar from '../Sidebar/Sidebar';
import Cart from '../Cart/Cart';
export const navContext=createContext();
const NavbarContext = () => {
    const [showside,setShowSide]=useState(false);
    const [showcart,setShowCart]=useState(false);
    const [showlogin,setShowLogin]=useState(false);
    const handleSidebar=(value)=>{
        setShowSide(value);
    }
    const handleCart=(value)=>{
        setShowCart(value);
    }
    const handleLogin=(value)=>{
        setShowLogin(value);
    }
  return (
   <navContext.Provider value={{handleCart,handleSidebar,handleLogin,showside,showcart,showlogin}}>
  <Navbar/>
  
  <LowerNav/>
  <Sidebar/>
  <Cart/>
   </navContext.Provider>
  )
}

export default NavbarContext
