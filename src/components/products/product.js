import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { productAction } from "./productAction/productAction";
import Cards from "./Card";
import './product.css';

const Product = () => {
  // const [info,setInfo] = useState([])
  const data =  useSelector((storeData)=>{
    
      return storeData.domino_data
  })
   console.log(data.veg_pizza);
   
   const dispatch = useDispatch();
  useEffect(()=>{
     getMenuData();
  },[])
  const getMenuData = ()=>{
    fetch('http://localhost:3001/domino_data').then((res)=>res.json())
    .then((data)=>{
          
        // dispatch( productAction(data))
        console.log(data);
        productAction(data,dispatch)
    })
  }

  return (
    <div id='productBox'>
    {Object.keys(data).length > 0 ?
       data.veg_pizza.map((el)=>{
        return (
          <Cards props={el}/>
        )
       })
     : <h1>Data is empty</h1>}
    </div>
  )
}

export default Product