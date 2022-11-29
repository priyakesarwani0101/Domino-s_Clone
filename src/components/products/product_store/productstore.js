import {legacy_createStore as store} from 'redux'
import ProductReducer from "../productReducer/product_reducer";


export const data = store(ProductReducer,);