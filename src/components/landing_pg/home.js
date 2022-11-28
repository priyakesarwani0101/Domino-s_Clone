import React from 'react'
import "./Home.css" ;

export default function Home() {
  return (
    <div className='header'>

      <a href='https://www.dominos.co.in/'>
        <img src="https://www.dominos.co.in/assets/Logo.png" alt="logoImg" />
      </a>

      <ul className='head-links'>
        <li>OUR MENU</li>
        <li>DOMINO'S STORE</li>
        <li>GIFT CARD</li>
        <li>CORPORATE ENQUIRY</li>
        <li>CONTACT</li>
      </ul>

      <a href='https://dominos.onelink.me/uM7R/3e839899'  id="downloadBtn" >Download App</a>

    </div>
  )
}
