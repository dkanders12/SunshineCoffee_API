import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.scss";
import Cards from "../../Components/Cards/Cards";
import ShopNow from "../../Components/Shop/ShopNow";
import Testimonies from "../../Components/Testimonies/Testimonies";

const Home = () => {
  return (
    <section className="homePage">
      <Header />
      <Cards className="editCards"></Cards>
      <ShopNow />
      <Testimonies></Testimonies>
    </section>
  );
};

export default Home;
