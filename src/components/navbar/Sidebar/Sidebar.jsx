import React from "react";
import "./style/sidebar.css";
import { navContext } from "../Context/NavbarContext";
import { useContext } from "react";

// import track from '../../Image/order_track.png'
import track from '../Image/order_track.png'
import pizza from '../Image/pizza.png'
import home from '../Image/home_icon.png'
import offer from '../Image/offers.png'
import menu from '../Image/menu.png'
import gift from '../Image/giftbox.png'
import terms from '../Image/terms.png'
import comment from '../Image/comment.png'
import cross from '../Image/newcross.png'
const Sidebar = () => {
  const { showside } = useContext(navContext);
  const { handleSidebar } = useContext(navContext);
  return (
    <>
      <div
        className="sidebar"
        style={showside ? { width: "25%" } : { width: "0%" }}
      >
        <div>   
          <img src={track} alt="" />
          <span>track Current order</span></div>
        <div>
        <img src={pizza} alt="" />
          <span>order history</span></div>
        <div>
        <img src={home} alt="" />
          <span>home</span>
          </div>
        <div>
        <img src={offer} alt="" />
          <span>deals & offers</span></div>
        <div>
        <img src={menu} alt="" />
          <span>menu</span></div>
        <div>
        <img src={gift} alt="" />
          <span>everyday value offers</span></div>
        <div>
        <img src={terms} alt="" />
          <span>terms & condition</span></div>
        <div>
        <img src={comment} alt="" />
          <span>Feedback</span></div>
        <div>
        <img src={pizza} alt="" />
          <span>contact us</span></div>
      </div>
      <div
        className="escape_cross"
        style={showside ? { width: "80px",left:"342px" } : {width: "0px",left:"0px" }}
        onClick={() => handleSidebar(false)}
      >
        <div><img src={cross} alt="" /></div>
        
      </div>
    </>
  );
};

export default Sidebar;
