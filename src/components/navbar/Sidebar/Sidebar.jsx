import React from 'react'
import './style/sidebar.css'
import { navContext } from '../Context/NavbarContext'
import { useContext } from 'react'
const Sidebar = () => {
    const {showside}=useContext(navContext);
    const {handleSidebar}=useContext(navContext);
  return (
    <div className='sidebar' style={showside ?{width:"25%"} : {width:"0%"}} onClick={()=>handleSidebar(false)} >
      
    </div>
  )
}

export default Sidebar
