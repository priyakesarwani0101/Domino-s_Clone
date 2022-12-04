import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";


const Menu = () => {
  return (
    <div>
      <div id="banner">
        <img
          src="https://www.dominos.co.in/theme2/front/images/home/Safety_Merchandising_adaptation_1514x240px.webp"
          alt="banner"
        />
      </div>

      <h1 style={{ color: "#d41b35", fontWeight: "bolder", fontSize: "40px",textAlign:"center",marginTop:"15px" }}>
        DOMINO'S MENU
      </h1>

      <div className="menuPage">
        <div className="menu">
          <h1 style={{textAlign:"center"}}>VEG PIZZA</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/my-vegpizza.webp"
            alt="veg_pizza"
          />
          <p style={{textAlign:"center"}}>
            A delight for veggie lovers! Choose from our wide range of delicious
            vegetarian pizzas, it's softer and tastier
          </p>
          <Link to="/menu/veg_pizza">
            <button id="menuBtn">VIEW ALL</button>
          </Link>
        </div>
        <div className="menu">
          <h1 style={{textAlign:"center"}}>NON-VEG PIZZA</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp"
            alt="nonveg_pizza"
          />
          <p style={{textAlign:"center"}}>
            Choose your favourite non-veg pizzas from the Domino's Pizza menu.
            Get fresh non-veg pizza with your choice of crusts & toppings
          </p>
          <Link to="/menu/non_veg_pizza">
            <button id="menuBtn">VIEW ALL</button>
          </Link>
        </div>
        <div className="menu">
          <h1 style={{textAlign:"center"}}>PIZZA MANIA</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/my-pizzamania.webp"
            alt="pizza_mania"
          />
          <p style={{textAlign:"center"}}>
            Indulge into mouth-watering taste of Pizza mania range, perfect
            answer to all your food cravings
          </p>
          <Link to="/menu/pizza_mania">
            <button id="menuBtn">VIEW ALL</button>
          </Link>
        </div>
        <div className="menu">
          <h1 style={{textAlign:"center"}}>FOOD AND BEVERAGES</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/sides_beverages.webp"
            alt="beverages"
          />
          <p style={{textAlign:"center"}}>
            Complement your pizza with wide range of sides & beverages available
            at Domino's Pizza India
          </p>
          <Link to="/menu/sides_beverages">
            <button id="menuBtn">VIEW ALL</button>
          </Link>
        </div>
        <div className="menu">
          <h1 style={{textAlign:"center"}}>PASTA</h1>
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Pasta-alla-vodka-f1d2e1c.jpg"
            alt="pasta"
          />
          <p style={{textAlign:"center"}}>
            Choose your favourite pizza pasta from the Domino's pasta menu. Get
            fresh non-veg pasta with your choice with creamy tomato, tikka
            masala, cheesy jalapeno and more.
          </p>
          <Link to="/menu/pasta">
            <button id="menuBtn">VIEW ALL</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;




// import  Cards  from './components/products/Card';
// import React from "react";
// import './App.css';
// import NavbarContext from "./components/navbar/Context/NavbarContext";
// import Footer from "./components/footer/Footer/Footer";
// import {Routes,Route} from 'react-router-dom'
// import Product from './components/products/product'
// import VegPizza from "./components/products/veg_pizza";
// import NonvegPizza from "./components/products/non_veg_pizza";
// import PizzaMania from "./components/products/pizza_mania";
// import Pasta from "./components/products/pasta";
// import Beverages from "./components/products/beverages";
// import Menu from './components/menu_page/menu'



// function App() {


//   return (
//     <div className="App">
      

      {/* <NavbarContext />
     

      <Routes>
        <Route path="/menu" element={<Product />}></Route>
       <Route path="/menu/veg_pizza" element={<VegPizza />}></Route>
       <Route path="/menu/non_veg_pizza" element={<NonvegPizza />}></Route>
       <Route path="/menu/pizza_mania" element={<PizzaMania />}></Route>
       <Route path="/menu/pasta" element={<Pasta />}></Route>
       <Route path="/menu/sides_beverages" element={<Beverages />}></Route>
         

      </Routes>

     <Footer /> */}

//     </div>

//   );
// }

// export default App;

