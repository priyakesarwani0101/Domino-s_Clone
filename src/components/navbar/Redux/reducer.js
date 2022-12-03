import { ADD_DATA } from "./actionTypes";
import { ADD_TO_CART } from "./actionTypes";
import { DELETE_CART } from "./actionTypes";
const oldarr={
    data:[],
    cartArr:[],
}
export const  reducer=(state=oldarr,{type,payload})=>{
    switch(type){
        case ADD_DATA:
            return {
                ...state,
                data:[...state.data,payload],
            }
            case ADD_TO_CART:
                return {
                    ...state,
                    cartArr:[...state.cartArr,payload],
                }
                case DELETE_CART:
            return {
                ...state,
                cartArr:state.cartArr.filter((el)=>el.id !==payload)
            }
            default :
            return state
    }
}