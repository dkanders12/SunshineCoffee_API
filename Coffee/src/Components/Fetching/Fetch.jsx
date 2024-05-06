import React, { useState, useEffect } from "react";
import "./Fetch.scss";

import { NavLink } from "react-router-dom";
import { handleAddToCart } from "../Handle/Handle";

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8081/products/getAll");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section id="ProductList">
      <h2>Our picks for you</h2>
      <div>
        {products.map((product) => (
          <article key={product.id}>
            <h2>{product.name}</h2>
            <div id="center">
              <img src={product.image} alt="" />
              <p>Description: {product.description}</p>
            </div>
            <div id="fix2">
              <p>Price: {product.price}Dk</p>

              <button className="add" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
