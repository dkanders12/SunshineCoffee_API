import React from "react";
import "./ShopNow.scss";
import { NavLink } from "react-router-dom";
const ShopNow = () => {
  return (
    <section id="mainShopNow">
      <article id="shopNowEdit">
        <h2>Shop Now</h2>
        <p>
          Our delicious coffees wil get you brewing the best cup of coffee you
          ever tasted in no time at all. And the best part of it? It is totally
          organic, fair trade and sustainably sourced. So get brewing
        </p>
        <NavLink to="/Shop">Go to products</NavLink>
      </article>
    </section>
  );
};
export default ShopNow;
