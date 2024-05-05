import React from "react";
import Header from "../../Components/Header/Header";
import ProductList from "../../Components/Fetching/Fetch";

const Shop = () => {
  return (
    <section className="ShopPage">
      <Header></Header>
      <ProductList></ProductList>
    </section>
  );
};

export default Shop;
