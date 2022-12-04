import React from "react";
import "./Button.css";

const Button = () => {
  let btn_comp = document.getElementById("btn_comp");
  let btnTxt = document.getElementById("btn_txt");
  btn_comp.onclick = () => {
    btnTxt.innerText = "Thanks";
    btn_comp.classList.add("active");
  };

  return (
    <div>
      <div class="hero">
        <button id="btn_comp">
          <p id="btn_txt">Submit</p>
          <div class="check-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Button;
