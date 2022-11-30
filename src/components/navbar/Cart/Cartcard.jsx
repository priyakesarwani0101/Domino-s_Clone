import React from "react";
import { useDispatch } from "react-redux";
import { deletecart } from "../../Redux/action";
 const Cartcard=({props})=>{
    const dispatch=useDispatch();
    const handleCartcardData=()=>{
        dispatch(deletecart(props.id));
        
    }
    return(
        <div style={{textAlign:"center",marginBottom:"15px", border:"1px solid red"}} onClick={handleCartcardData} >
            {props.id}
        </div>
    )
 }
 export default Cartcard;