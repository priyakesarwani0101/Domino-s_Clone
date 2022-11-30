import React,{ createContext, useState } from 'react'
// import Navbar from '../Components/Navbar/Navbar';
import Navbar from '../Navbar/Navbar'
import LowerNav from '../Navbar/LowerNav';
import Sidebar from '../Sidebar/Sidebar';
import Cart from '../Cart/Cart';
import Search from '../Searchbar/Search';
export const navContext=createContext();
const NavbarContext = () => {
    const [showside,setShowSide]=useState(false);
    const [showcart,setShowCart]=useState(false);
    const [showlogin,setShowLogin]=useState(false);
    const [showSearch,setShowSearch]=useState(false);
    const handleSidebar=(value)=>{
        setShowSide(value);
    }
    const handleCart=(value)=>{
        setShowCart(value);
    }
    const handleLogin=(value)=>{
        setShowLogin(value);
    }
    const handleSearch=(value)=>{
        setShowSearch(value);
    }
  return (
   <navContext.Provider value={{handleCart,handleSidebar,handleLogin,handleSearch,showside,showcart,showlogin,showSearch}}>
  <Navbar/>
  
  <LowerNav/>
  <Sidebar/>
   <Search/>
  <Cart/>

   </navContext.Provider>
  )
}

export default NavbarContext
