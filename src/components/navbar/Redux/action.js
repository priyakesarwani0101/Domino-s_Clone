import { ADD_DATA } from "./actionTypes";
import {ADD_TO_CART} from './actionTypes'
import {DELETE_CART}  from './actionTypes'
export  const adddata=(data)=>(
    {
        type:ADD_DATA,
        payload:data,
    }
)

export  const addToCart=(data)=>(
    {
        type:ADD_TO_CART,
        payload:data,
    }
)
 
export  const deletecart=(data)=>(
    {
        type:DELETE_CART,
        payload:data,
    }
)