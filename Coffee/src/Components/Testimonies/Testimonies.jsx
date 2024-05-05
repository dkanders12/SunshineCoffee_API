import React from "react";
import "./Testimonies.scss";
const Testimonies = () => {
  const people = ["john", "Eva", "Peter", "Michelle"];
  return (
    <section id="Testimonies">
      <h2>Testimonies</h2>
      <div>
        {people.map((person, index) => (
          <article key={index} id="TestimoniesCard">
            <h3>{person}</h3>
            <p>
              “Sunshine Coffee really delivers a great product. I love their
              coffee and the guided flow is great...”
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonies;
