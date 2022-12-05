import React from "react";
import "./style/sidebar.css";
import { navContext } from "../../Context/NavbarContext";
import { useContext } from "react";

import track from '../../Image/order_track.png'
import pizza from '../../Image/pizza.png'
import home from '../../Image/home_icon.png'
import offer from '../../Image/offers.png'
import menu from '../../Image/menu.png'
import gift from '../../Image/giftbox.png'
import terms from '../../Image/terms.png'
import comment from '../../Image/comment.png'
import cross from '../../Image/newcross.png'
const Sidebar = () => {
  const { showside } = useContext(navContext);
  const { handleSidebar } = useContext(navContext);
  return (
    <>
      <div
        className="sidebar"
        style={showside ? { marginLeft: "0px" } : { marginLeft: "-350px" }}
      >
        <div>   
          <img src={track} alt="" />
          <div>track Current order</div></div>
        <div>
        <img src={pizza} alt="" />
          <div>order history</div></div>
        <div>
        <img src={home} alt="" />
          <div>home</div>
          </div>
        <div>
        <img src={offer} alt="" />
          <div>deals & offers</div></div>
        <div>
        <img src={menu} alt="" />
          <div>menu</div></div>
        <div>
        <img src={gift} alt="" />
          <div>everyday value offers</div></div>
        <div>
        <img src={terms} alt="" />
          <div>terms & condition</div></div>
        <div>
        <img src={comment} alt="" />
          <div>Feedback</div></div>
        <div>
        <img src={pizza} alt="" />
          <div>contact us</div></div>
      </div>
      
    </>
  );
};

export default Sidebar;
