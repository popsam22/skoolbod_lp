import React, { useState } from "react";
import "./NavBar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/skoolbod_logo.png";

const NavBar = () => {
  const [toggleSmallScreen, setToggleSmallScreen] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="skoolbod logo" />
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="app__navbar-button">
        <a href="#consultation">Free Consultation</a>
      </button>

      <div className="app__navbar-smallscreen">
        <RiMenu3Line className="app__navbar-smallscreen-menu" color="black" size={27} onClick={() => { setToggleSmallScreen(true) }} />


        {toggleSmallScreen && (
          <div className="app__navbar-smallscreen-overlay">
            <RiCloseLine className="overlay-close" color="black" size={35} onClick={() => { setToggleSmallScreen(false) }} />
            <ul className="app__navbar-smallscreen-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#media">Media</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button className="app__navbar-button">
              <a href="#consultation">Free Consultation</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

// use state in react allows us to make dynamic changes
