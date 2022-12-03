import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "./productAction/productAction";
// import "./product.css";
import Menu from "../menu_page/menu";
// import "../menu_page/menu.css";


const Product = () => {
  const data = useSelector((storeData) => {
    return storeData.domino_data;
  });
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    getMenuData();
  }, []);
  const getMenuData = () => {
    fetch("http://localhost:3001/domino_data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        productAction(data, dispatch);
      });
  };

  return (
    <div>
      {/* {Object.keys(data).length > 0 ?
       data.pizza_mania.map((el)=>{
        return (
          <Cards props={el}/>
        )
       })
     : <h1>Data is empty</h1>} */}

      <Menu />
    </div>
  );
};

export default Product;
