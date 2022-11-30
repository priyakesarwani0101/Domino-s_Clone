import  Cards  from './components/products/Card';
import React from "react";
import './App.css';
import NavbarContext from './components/navbar/Context/NavbarContext'
import Product from './components/products/product.js'

function App() {
  return (
    <div className="App">
      <NavbarContext />
      
     
      <Product />
      
    </div>
  );
}

export default App;
