
// import  Cards  from './components/products/Card';
 import React from "react";
import './App.css';
import NavbarContext from "./components/navbar/Context/NavbarContext";
import Footer from "./components/footer/Footer/Footer";
import {Routes,Route} from 'react-router-dom'
import Product from './components/products/product'
import VegPizza from "./components/products/veg_pizza";
import NonvegPizza from "./components/products/non_veg_pizza";
import PizzaMania from "./components/products/pizza_mania";
import Pasta from "./components/products/pasta";
import Beverages from "./components/products/beverages";
import Menu from './components/menu_page/menu'



function App() {


  return (
    <div className="App">
      

      {/* <NavbarContext />
     

      <Routes>
        
       <Route path="/menu/veg_pizza" element={<VegPizza />}></Route>
       <Route path="/menu/non_veg_pizza" element={<NonvegPizza />}></Route>
       <Route path="/menu/pizza_mania" element={<PizzaMania />}></Route>
       <Route path="/menu/pasta" element={<Pasta />}></Route>
       <Route path="/menu/sides_beverages" element={<Beverages />}></Route>
         

      </Routes> */}

     {/* <Footer /> */}

    </div>

  );
}

export default App;
