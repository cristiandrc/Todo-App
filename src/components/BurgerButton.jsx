import React from "react";
import "./styles/burgerButton.css";

const BurgerButton = ({ click }) => (
  <div onClick={() => click()} className="burger-container">
    <span className="burger burger-top"></span>
    <span className="burger burger-bottom"></span>
  </div>
);

export default BurgerButton;
