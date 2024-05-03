import React from "react";

import { useState, useEffect } from "react";

function ProductList() {
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
    <section>
      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt="" />
          <p>Description: {product.description}</p>
          {/* Add more attributes as needed */}
        </article>
      ))}
    </section>
  );
}

export default ProductList;
