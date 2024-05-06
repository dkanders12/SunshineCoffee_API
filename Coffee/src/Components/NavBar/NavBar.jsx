import React, { useState } from "react";
import "./NavBar.scss";
import { CgProfile } from "react-icons/cg";
import { FaOpencart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Coffee from "../../assets/img/Coffee.png";
import ShoppingCart from "../Shop/ShoppingCart";
import { handleAddToCart } from "../Handle/Handle";
import ProductList from "../Fetching/Fetch";

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav>
      <div></div>
      <div id="logo">
        <p>Sunshine Coffee</p>
        <img id="CoffeeCup" src={Coffee} alt="" />
      </div>
      <div></div>
      <div id="top-left-bar">
        <NavLink id="Eu">Europa</NavLink>
        <FaOpencart className="i-tag" onClick={toggleCart} />{" "}
        <NavLink className="i-tag" to="/Login">
          <CgProfile className="i-tag"></CgProfile>
        </NavLink>
      </div>
      {isCartOpen && (
        <ShoppingCart
          onClose={toggleCart}
          product={handleAddToCart(ProductList)}
        />
      )}
    </nav>
  );
};

export default NavBar;
