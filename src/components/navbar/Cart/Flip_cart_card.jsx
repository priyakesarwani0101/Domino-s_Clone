import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import {deletecart} from '../../Redux/action'
import './style/cartCard.css'
const Flip_cart_card=({props})=>{
    const [rotate,setrotate]=useState(false);
    const [backrotate,setbackrotate]=useState(false);
    const dispatch=useDispatch();
    const handleRemoveCart=()=>{
        dispatch(deletecart(props.id));
    }
    return(
        <div>
      <div className="maincontainer">

        <div className="flipcard" style={rotate ? {transform: "rotateY(180deg)"} :{transform: "rotateY(0deg)"} }>

            <div className="frontcard" >
             
             <div style={{display:"flex"}}>
                <div className="cart_div_img" style={{width :"110px",height :"70px"}}>
                <img src={props.image} alt=""  style={{width :"100%",height :"100%"}}/>
             </div>
             <div className="cart_details" style={{marginLeft:"8px"}}>
                <div>{props.title}</div>
                <div>{props.description}</div>
                <div>
                    <div> {props.category}</div>
                    <div>₹ {props.price}</div>
                   </div>
             </div>
             </div>
             <div className="down_remove_flex">
             <div className="quantity_button">
                <button>-</button>
               <button >1</button>
               <button>+</button>
             </div>
             <div>
             <button onClick={()=>{
                setrotate(true);
                setbackrotate(false);
            }}><i class="fa-regular fa-trash-can"></i></button>
            </div>
            </div>
            </div>
            <div className="backcard" style={backrotate ? {transform: "rotateY(-180deg)"} :{transform: "rotateY(180deg)"} } >
            
                back of the card
   <button onClick={()=>{
    setrotate(false);
    setbackrotate(true);
   }}>back</button>
   <button onClick={handleRemoveCart}>remove</button>
            </div>
        </div>
      </div>

        </div>
    )
}
export default Flip_cart_card