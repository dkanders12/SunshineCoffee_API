import React from "react";
import "./Cards.scss";
import picture1 from "../../assets/img/Rectangle2.png";
import picture2 from "../../assets/img/Rectangle3.png";
import picture3 from "../../assets/img/Rectangle4.png";

const Cards = () => {
  const pictures = [picture1, picture2, picture3];
  const overlines = ["The right beans", "Carefully handled", "From us to you"];

  return (
    <>
      <section id="MainCards">
        {pictures.map((picture, index) => (
          <article id="cardmaker" key={index}>
            <h2>{overlines[index]}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sed
              possimus. A repellat aut laudantium inventore tenetur odio
              voluptatum vitae veniam facilis hic labore, ipsa deserunt officiis
              animi esse fugit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellat officiis beatae, perspiciatis illo
              debitis
            </p>
            <img src={picture} alt="" />
          </article>
        ))}
      </section>
    </>
  );
};

export default Cards;
