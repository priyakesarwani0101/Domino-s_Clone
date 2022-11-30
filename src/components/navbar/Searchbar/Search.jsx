import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { navContext } from "../Context/NavbarContext";
import './search.css'
 const Search= () => {
    const {showSearch}=useContext(navContext);
    const {handleSearch}=useContext(navContext);
    const reference=useRef(null);
    const trueStyle={
       
        marginTop: "50px",
        marginLeft:"37%"
    }
    const falseStyle={
        visibility:"hidden",
        marginLeft:"37%",
        top:"-800px"
    }
 
    
    
    // {showSearch ? reference.current.focus():null}
    return (
        <div className="search_body" style={showSearch ? trueStyle :falseStyle } >
            <div className="search">
            <div className="searchicon" ></div>
              <div className="input">
                  <input ref={reference} type="text"  placeholder="Search" id="mySearch" autoFocus={showSearch ? true: false} />
              
            </div>
            <span className="search_clear" onClick={()=>handleSearch(false)}></span>
        </div>
        </div>
    )
}
export default Search