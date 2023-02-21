import React, { useState } from "react";
import logo from "../../assets/logo/navbar-logo.svg";
import menu from "../../assets/icons/menu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  console.log(open);

  return (
    <div
      id="navbar_container"
      className="w-full h-max justify-between flex items-center lg:px-14  px-4 py-5"
    >
      <div id="logo_container" className="flex items-center w-max space-x-2">
        <img
          src={logo}
          alt="pune polytech logo"
          className="lg:h-14 lg:w-14 h-8 w-8"
        ></img>
        <div className="lg:text-2xl text-md text-primary font-bold">
          Pune Polytech Pvt. Ltd.
        </div>
      </div>
      <div className="w-max lg:block hidden">
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
          <Link to="/gallery">
            <li>Gallery</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/careers">
            <li>Careers</li>
          </Link>
        </ul>
      </div>
      <div className="w-max lg:hidden block">
        <div className="w-max  cursor-pointer" onClick={handleToggle}>
          <img src={menu} className="w-5 h-5 relative" alt=""></img>
          {open && (
            <div className="absolute top-[4.5rem] lg:h-96 md:h-screen p-6 md:w-1/3 w-2/3 bg-white z-10 right-0 rounded-md">
              <ul className="flex flex-col justify-evenly items-center space-y-5">
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
                <Link to="/gallery">
                  <li>Gallery</li>
                </Link>
                <Link to="/contact">
                  <li>Contact Us</li>
                </Link>
                <Link to="/careers">
                  <li>Careers</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
