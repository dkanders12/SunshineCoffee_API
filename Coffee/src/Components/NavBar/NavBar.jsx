import React from "react";
import "./NavBar.scss";
import { CgProfile } from "react-icons/cg";
import { FaOpencart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Coffee from "../../assets/img/Coffee.png";
const NavBar = () => {
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
        <FaOpencart className="i-tag"></FaOpencart>
        <CgProfile className="i-tag"></CgProfile>
      </div>
    </nav>
  );
};

export default NavBar;
