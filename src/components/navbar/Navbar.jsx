import React from "react";
import logo from "../../assets/logo/navbar-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      id="navbar_container"
      className="w-full h-max justify-between flex items-center px-14 py-5"
    >
      <div id="logo_container" className="flex items-center w-max space-x-2">
        <img src={logo} alt="pune polytech logo" className="h-14 w-14"></img>
        <div className="text-2xl text-primary font-bold">
          Pune Polytech Pvt. Ltd.
        </div>
      </div>
      <div className="w-max">
        <ul className="flex justify-evenly items-center space-x-5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/technology">
            <li>Technology</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/gallery">
            <li>Gallery</li>
          </Link>
          <Link to="/careers">
            <li>Careers</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
