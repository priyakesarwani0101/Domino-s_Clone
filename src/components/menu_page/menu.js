import React from "react";
import './menu.css'

const Menu = () => {
  return (
    <div>
        <div id="banner">
            <img 
            src="https://www.dominos.co.in/theme2/front/images/home/Safety_Merchandising_adaptation_1514x240px.webp"
            alt="banner"
            />
        </div>
        <h1 style={{color:"#d41b35"}}>DOMINO'S MENU</h1>
      <div className="menuPage">
        <div className="menu">
           
            
          <h1>VEG PIZZA</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/my-vegpizza.webp"
            alt="veg_pizza"
          />
          <p>
            A delight for veggie lovers! Choose from our wide range of delicious
            vegetarian pizzas, it's softer and tastier
          </p>
          <button id="btn">VIEW ALL</button>
          
        </div>
        <div className="menu">
        
          <h1>NON-VEG PIZZA</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp"
            alt="nonveg_pizza"
          />
          <p>
            Choose your favourite non-veg pizzas from the Domino's Pizza menu.
            Get fresh non-veg pizza with your choice of crusts & toppings
          </p>
          <button id="btn">VIEW ALL</button>
        </div>
        <div className="menu">
          <h1>PIZZA MANIA</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/my-pizzamania.webp"
            alt="pizza_mania"
          />
          <p>
            Indulge into mouth-watering taste of Pizza mania range, perfect
            answer to all your food cravings
          </p>
          <button id="btn">VIEW ALL</button>
        </div>
        <div className="menu">
          <h1>FOOD AND BEVERAGES</h1>
          <img
            src="https://www.dominos.co.in/theme2/front/images/menu-images/sides_beverages.webp"
            alt="beverages"
          />
          <p>
            Complement your pizza with wide range of sides & beverages available
            at Domino's Pizza India
          </p>
          <button id="btn">VIEW ALL</button>
        </div>
        <div className="menu">
          <h1>PASTA</h1>
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Pasta-alla-vodka-f1d2e1c.jpg"
            alt="pasta"
          />
          <p>
            Choose your favourite pizza pasta from the Domino's pasta menu. Get
            fresh non-veg pasta with your choice with creamy tomato, tikka
            masala, cheesy jalapeno and more.
          </p>
          <button id="btn">VIEW ALL</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
