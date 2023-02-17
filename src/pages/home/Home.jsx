import React from "react";
import banner from "../../assets/imgs/hero-background.svg";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/imgs/about.svg";

const Home = () => {
  return (
    <div className="h-max w-full">
      <div id="home_banner" className="w-full h-max">
        <img src={banner} alt="home" className="w-full h-auto relative"></img>
        <Link
          to="/"
          className="w-max px-16 py-2 bg-white rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 mt-40"
        >
          See Catalogue
        </Link>
      </div>
      <div
        id="about_container"
        className="w-full h-max flex justify-center p-28 space-x-10"
      >
        <div className="relative">
          <img src={aboutImage} alt="about" className="z-10 relative"></img>
          <div className="h-28 w-48 bg-secondary absolute -top-5 -left-5 "></div>
          <div className="h-28 w-48 bg-primaryLight absolute -bottom-5 -right-5 "></div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="text-3xl font-bold text-secondary">About Us</div>
          <p className="w-[30rem]  ">
            Since 2014, PPPL has been offering cutting edge Packaging Tube
            Solutions for diverse customers in over five countries across the
            globe. Based on long years of expertise and innovative thinking, we
            develop, produce and supply smart Seamless Plastic Tubes. Every tube
            is carefully designed to cater to the specific requirements of each
            customer in the Cosmetics, Personal Care, Hair Care, Oral Care,
            Pharmaceutical and Food Sectors.
          </p>
          <p className="w-[30rem]  ">
            We use the most technologically advanced production and printing
            methods on Mono-layer, Three-layer, and Multi-layer Plastic Tubes.
            We offer unique decoration possibilities for achieving the highest
            standards of quality and excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
