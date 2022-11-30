import React from 'react'
import "./Home.css" ;


export default function Home() {
  return (
    <div>
    
    <div className='header'>

      <a href='https://www.dominos.co.in/'>
        <img src="https://www.dominos.co.in/assets/Logo.png" alt="logoImg" />
      </a>

      <ul className='head-links'>
        <li>
          <a href="/" >OUR MENU</a >
        </li>
        <li>
          <a href="/">DOMINO'S STORE</a >
        </li>
        <li>
          <a href='/'>GIFT CARD</a >
        </li>
        <li>
          <a href="/">CORPORATE ENQUIRY</a >
        </li>
        <li>
          <a href="/">CONTACT</a >
        </li>
      </ul>

      <a href='https://dominos.onelink.me/uM7R/3e839899'  id="downloadBtn" >Download App</a>

    </div>
   <div id="container"  > 



    <div>

      <h2 className='carousel-title'>Coupons & Offers</h2>
      <div>

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
                <div class="carousel-item active ">
                 <img src="https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg"  class="d-block w-50"  alt="image1" />
               </div>
               <div class="carousel-item" >
                  <img src="https://api.dominos.co.in/prod-olo-api/images/Home_payzapp_20201029.jpg" class="d-block w-50" alt="image2" />
               </div>
                <div class="carousel-item">
                 <img src="https://api.dominos.co.in/prod-olo-api/images/Home_au_20201029.jpg" class="d-block w-50" alt="image3" />
               </div>
               <div class="carousel-item">
                 <img src="https://api.dominos.co.in/prod-olo-api/images/Home_Paytm_20210519.jpg" class="d-block w-50" alt="image4" />
               </div>
            <div class="carousel-item">
                 <img src="https://api.dominos.co.in/prod-olo-api/images/Home_Freecharge_20210405.jpg" class="d-block w-50" alt="image5" />
        </div>
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </div>

    </div>

    <div>

      <h2 className='carousel-title'>Explore</h2>

      <div id='explore-items'>

      <div className='explore-card'> 
        <div>
          <img src='https://www.dominos.co.in/assets/menu.png' alt='menu'/>
        </div>
        <div>
          <h4>OUR MENU</h4>
          <p>Explore our range of delicious Pizzas, delivered in 30 minutes!</p>
        </div>
        <div>
          <h5>DISCOVER PIZZA</h5>
        </div>
      </div>

      <div className='explore-card'> 
        <div>
          <img src='https://www.dominos.co.in/assets/store.png' alt='store'/>
        </div>
        <div>
          <h4>NEARBY STORE</h4>
          <p>find a Domino's Pizza restaurant near you</p>
        </div>
        <div>
          <h5>FIND DOMINO'S STORE</h5>
        </div>
      </div>

      <div className='explore-card'> 
        <div>
          <img src='https://www.dominos.co.in/assets/birthday.png' alt='birthday'/>
        </div>
        <div>
          <h4>BIRTHDAY PARTY</h4>
          <p>Celebrate the joy of birthday with Fresh and Hot pizza</p>
        </div>
        <div>
          <h5>BOOK NOW</h5>
        </div>
      </div>

      <div className='explore-card'> 
        <div>
          <img src='https://www.dominos.co.in/assets/catering.png' alt='catering'/>
        </div>
        <div>
          <h4>CATERING</h4>
          <p>Live Domino's Kitchen for wedding / corporate events </p>
        </div>
        <div>
          <h5>BOOK NOW</h5>
        </div>
      </div>

      </div>

      
    </div>

    <div className='download'>
      <div className='download-left'>
        <img src="https://www.dominos.co.in/assets/new_app_img.png" alt='dominos-mobile' />
      </div>
      <div className='download-right'>
        <h2>Unlock Exclusive Offers</h2>
        <h3>For lightning fast ordering experience download the Domino’s app</h3>
        <div className='download-icon'>
          <img src="https://www.dominos.co.in/assets/play_store.png" alt='play-store' />
          <img src="https://www.dominos.co.in/assets/app_store.png" alt='app-store' />
        </div>
      </div>
    </div>

    <div className='first-info'>
        <h3>Domino's Pizza: Delivering Happiness</h3>
        <p>Domino's Pizza: Delivering Happiness</p>
        <p>Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say.</p>
        <p>With Domino's it is always “Rishton ka time”. Whether it's a treat for your promotion, a kid topping his class or winning the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs to put things into perspective and start any celebration. Plus, you do not even need to rush to the restaurant to have one now. A call, a few clicks on our website or a few touches on the mobile screen is all you have to do to have that tempting, light-on-the-pocket pizza at your doorstep.</p>
        <p>There is something for everyone here. The vegetarians, non-vegetarians, the sides’ lovers and also the ones who love to have something sweet by the time they reach the last bite of the last slice of pizza slice.</p>

      </div>

      <div className='second-info'>
        <h3>What We Need - More Choice. More Fun.</h3>
        <p>No matter what the situation, pizza always helps. Especially a pizza that gives you the freedom to choose your toppings - from paneer, crisp capsicum, onion, grilled mushroom, golden corn, black olives, fresh tomato, red paprika, jalapeno, paneer tikka and extra cheese to non-veg toppings such as pepper barbeque chicken, peri-peri chicken, grilled chicken rasher, chicken sausage or chicken tikka- the options are almost endless, anything and everything you can think of that too on top of the crust of your choice - New hand-tossed crust, wheat thin crust, cheese burst crust, classic hand-tossed crust or a fresh pan pizza. Because just like a pizza, Domino's understands you.</p>
        <p>And to shoo away those end-of-the-month blues while placing your order with our pizza restaurant, check out the everyday pizzas from pizza mania combos with everyday value offer of 2 pizzas starting at just ₹99 (regular size) and ₹199 (medium size) each.</p>

      </div>

      <div className='third-info'>
        <h3>The Promise Of 30-Minute Delivery</h3>
        <p>The icing on the cake or more aptly the extra cheese on your already fabulous pizza is that Domino’s takes only half an hour for its pizza delivery service. Don’t believe us? Time it if you please. With 1250+ stores present all over India, you can have a Domino’s pizza even while traveling on a train. Yes, you are reading it right, you can enjoy pizza on train too.</p>
        <p>So stop googling for the “pizza shops near me” and order from your nearest pizza outlet to have a hot box of pizza on your table in the next 30 minutes, or berth at the next halting station.</p>

      </div>

      <div className='fourth-info'>
        <h3>Franchise Information</h3>
        <p>Jubilant FoodWorks Limited is the Master Franchisee of Domino’s Pizza in India, Bangladesh, Sri Lanka and Nepal with sole and exclusive rights to own and operate Domino’s Pizza restaurants in these territories. For any franchise-related queries, kindly email us directly at dominos.franchise@jublfood.com</p>
        <p>We have come across a few instances of fraudsters posing as Jubilant FoodWorks and asking for payment from gullible investors against the promise of a Domino’s franchise. We therefore caution and urge all interested parties to be careful and vigilant and interact only with the email id mentioned above. Anyone dealing with such fraudsters shall be doing so on their own peril, risk and consequences.</p>
        <p>Neither Jubilant FoodWorks nor its Directors/Officers shall be responsible for any loss, harm, damage or fraud that occurs or may occur or arise to any person who decides to access such fake websites, or deal with them.</p>
      </div>

      <div className='lower-btn'>
        <button>Menu</button>
        
      </div>


</div>
    </div>
  )
}
