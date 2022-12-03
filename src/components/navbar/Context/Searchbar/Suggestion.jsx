import React from "react";
import './suggestion.css'
const Suggestion=({props})=>{
    

  return(
    <div className="search_suggestion_div">
      
         <div>
         <img src={props.image} style={{width:"50px",height:"50px",borderRadius:"50%"}} alt="" />
     </div>
     <div>{props.title}</div>
     
    </div>
  )
}
export default  Suggestion;