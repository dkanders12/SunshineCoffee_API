import React from "react";
import "./Footer.scss";

const Footer = () => {
  const foot = [
    {
      title: "Contact",
      text: "Supercoffeeroad 223b92230 New CoffelanPhone: 22331122 Mail: coffeeland@info.com",
    },
    {
      title: "Legal",
      text: "Cookie policy Retun policy Shipping Terms and Conditions",
    },
    {
      title: "About ",
      text: " History The people behind Partnerships International",
    },
  ];

  return (
    <footer>
      {foot.map((item, index) => (
        <article id="footC" key={index}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </footer>
  );
};

export default Footer;
