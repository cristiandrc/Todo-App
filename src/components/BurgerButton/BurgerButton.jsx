import React from "react";
import "./burgerButton.css";
const BurgerButton = ({ click }) => (
  <button onClick={() => click()} className="burger-container">
    <span className="burger burger-top"></span>
    <span className="burger burger-bottom"></span>
  </button>
);

export default BurgerButton;
