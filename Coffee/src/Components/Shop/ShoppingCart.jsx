import React, { useEffect } from "react";
import "./ShoppingCart.scss";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { handleAddToCart } from "../Handle/Handle";

const ShoppingCart = ({ onClose }) => {
  console.log(handleAddToCart(product));

  return (
    <section id="slideBar">
      <div id="topLeft">
        <IoClose className="Close" onClick={onClose} />{" "}
      </div>
      <article>
        <h2>Shopping Cart</h2>
        <div></div>
        <div>
          <p>Items in Cart:</p>
          <NavLink to="/PayNow">Pay Now</NavLink>
        </div>
      </article>
    </section>
  );
};

export default ShoppingCart;
