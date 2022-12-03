
// import  Cards  from './components/products/Card';
 import React from "react";
import './App.css';
import Detailsp from "./components/product_details/Detailsp"
import { ChakraProvider } from '@chakra-ui/react'
import Home from "./components/landing_pg/Home"
import Login from "./components/landing_pg/Login/Login"




function App() {
  return (
    <div className="App" >
      
        {/* <Home /> */}
        <Login/>
       
     </div>
  );
}

export default App;
