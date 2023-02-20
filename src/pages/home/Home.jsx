import React from "react";
import banner from "../../assets/imgs/hero-background.svg";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/imgs/about.svg";
import paint from "../../assets/imgs/paint.svg";
import automobile from "../../assets/imgs/automobile.svg";
import cosmetics from "../../assets/imgs/cosmetics.svg";
import fmcg from "../../assets/imgs/fmcg.svg";
import pharma from "../../assets/imgs/pharma.svg";
import healthcare from "../../assets/imgs/healthcare.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../../../node_modules/@splidejs/react-splide/dist/css/themes/splide-sea-green.min.css";
// import tube from "../../assets/imgs/tube.svg";

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
      <div id="our_usp" className="w-full">
        <div className="text-3xl font-bold text-secondary text-center">
          Our USPs
        </div>
        <div className="w-full h-max flex justify-center space-x-5 mt-10 ">
          <div className="h-52 w-52 rounded-full bg-tertiary z-10"></div>
          <div className="h-52 w-52 rounded-full bg-tertiary z-10"></div>
          <div className="h-52 w-52 rounded-full bg-tertiary z-10"></div>
          <div className="h-52 w-52 rounded-full bg-tertiary z-10"></div>
        </div>
        <div className="w-full bg-usp h-[743px] -mt-28 flex flex-col justify-end space-y-24 items-center">
          <div className="text-white text-4xl">Industries we cater to</div>
          <div className="grid gap-5 gap-y-16 grid-cols-3 w-max h-max">
            <div className="w-48 h-48 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-primary h-28 w-28 rounded-full -mt-12 flex justify-center items-center">
                <img src={pharma} className="h-14 w-14" alt=""></img>
              </div>
              <div className="text-3xl text-primary mt-6 font-semibold">
                Pharma
              </div>
            </div>
            <div className="w-48 h-48 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-secondary h-28 w-28 rounded-full -mt-12 flex justify-center items-center">
                <img src={cosmetics} className="h-14 w-14" alt=""></img>
              </div>
              <div className="text-3xl text-secondary mt-6 font-semibold">
                Cosmetics
              </div>
            </div>
            <div className="w-48 h-48 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-primary h-28 w-28 rounded-full -mt-12 flex justify-center items-center">
                <img src={healthcare} className="h-14 w-14" alt=""></img>
              </div>
              <div className="text-3xl text-primary mt-6 font-semibold">
                Healthcare
              </div>
            </div>
            <div className="w-48 h-48 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-secondary h-28 w-28 rounded-full -mt-12 flex justify-center items-center">
                <img src={fmcg} className="h-14 w-14" alt=""></img>
              </div>
              <div className="text-3xl text-secondary mt-6 font-semibold">
                FMCG
              </div>
            </div>
            <div className="w-48 h-48 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-primary h-28 w-28 rounded-full -mt-12 flex justify-center items-center">
                <img src={automobile} className="h-14 w-14" alt=""></img>
              </div>
              <div className="text-3xl text-primary mt-6 font-semibold">
                Automobile
              </div>
            </div>
            <div className="w-48 h-48 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-secondary h-28 w-28 rounded-full -mt-12 flex justify-center items-center">
                <img src={paint} className="h-14 w-14" alt=""></img>
              </div>
              <div className="text-3xl text-secondary mt-6 font-semibold">
                Paint
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="testimonials" className="w-full mt-24">
        <div className="text-3xl font-bold text-secondary text-center">
          Testimonials
        </div>
        <div className="w-full">
          <Splide
            options={{
              rewind: true,
              gap: "2rem",
              type: "loop",
              perPage: 1.5,
              focus: "center",
            }}
            // aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div className="w-full h-80 bg-secondary rounded-md text-white flex">
                <div className="w-1/3">
                  {/* <img src={tube} className="h-96 w-auto" alt=""></img> */}
                </div>
                <div className="flex flex-col space-y-4 w-2/3 mt-14">
                  <p className="text-3xl">Lorem ispum</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit obcaecati blanditiis aspernatur magnam
                    ducimus. Totam, laboriosam quas. .
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-80 bg-secondary rounded-md text-white flex">
                <div className="w-1/3">
                  {/* <img src={tube} className="h-96 w-auto" alt=""></img> */}
                </div>
                <div className="flex flex-col space-y-4 w-2/3 mt-14">
                  <p className="text-3xl">Lorem ispum</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit obcaecati blanditiis aspernatur magnam
                    ducimus. Totam, laboriosam quas. .
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-80 bg-secondary rounded-md text-white flex">
                <div className="w-1/3">
                  {/* <img src={tube} className="h-96 w-auto" alt=""></img> */}
                </div>
                <div className="flex flex-col space-y-4 w-2/3 mt-14">
                  <p className="text-3xl">Lorem ispum</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit obcaecati blanditiis aspernatur magnam
                    ducimus. Totam, laboriosam quas. .
                  </p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Home;
