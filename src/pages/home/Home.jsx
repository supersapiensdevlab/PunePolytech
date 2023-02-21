import React from "react";
import banner from "../../assets/imgs/hero-background.svg";
import bannersm from "../../assets/imgs/home-bg-sm.svg";
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

const Home = () => {
  return (
    <div className="h-max w-full">
      <div id="home_banner" className="w-full h-max">
        <img
          src={banner}
          alt="home"
          className="w-full lg:h-auto relative lg:block hidden"
        ></img>
        <img
          src={bannersm}
          alt="home"
          className="w-full lg:h-auto relative lg:hidden block"
        ></img>
        <Link
          to="/"
          className="w-max 2xl:px-16 2xl:py-2 px-8 py-1 2xl:text-lg text-sm bg-white rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 2xl:mt-40 -mt-14"
        >
          See Catalogue
        </Link>
      </div>
      <div
        id="about_container"
        className="w-full h-max lg:flex-row flex flex-col justify-center 2xl:p-28 lg:p-14 p-10  lg:space-x-10 space-x-0 space-y-10 lg:space-y-0 "
      >
        <div className="2xl:text-3xl text-2xl font-bold text-secondary text-center 2xl:text-left lg:hidden block mb-2">
          About Us
        </div>
        <div className=" md:flex justify-center relative">
          <img src={aboutImage} alt="about" className="z-10 relative"></img>
          <div className="h-28 w-48 bg-secondary absolute -top-5 -left-5 md:left-28 lg:-left-5 "></div>
          <div className="h-28 w-48 bg-primaryLight absolute -bottom-5 -right-5 md:right-28 lg:-right-5"></div>
        </div>
        <div className="flex flex-col space-y-4 flex-wrap">
          <div className="2xl:text-3xl text-2xl font-bold text-secondary text-center lg:text-left lg:block hidden">
            About Us
          </div>
          <p className="lg:w-[30rem]  ">
            Since 2014, PPPL has been offering cutting edge Packaging Tube
            Solutions for diverse customers in over five countries across the
            globe. Based on long years of expertise and innovative thinking, we
            develop, produce and supply smart Seamless Plastic Tubes. Every tube
            is carefully designed to cater to the specific requirements of each
            customer in the Cosmetics, Personal Care, Hair Care, Oral Care,
            Pharmaceutical and Food Sectors.
          </p>
          <p className="lg:w-[30rem] w-screen lg:block hidden">
            We use the most technologically advanced production and printing
            methods on Mono-layer, Three-layer, and Multi-layer Plastic Tubes.
            We offer unique decoration possibilities for achieving the highest
            standards of quality and excellence.
          </p>
        </div>
      </div>
      <div id="our_usp" className="w-full">
        <div className="2xl:text-3xl text-2xl font-bold text-secondary text-center">
          Our USPs
        </div>
        <div className="w-full h-max flex justify-center 2xl:space-x-5 space-x-2 md:space-x-5 mt-10">
          <div className="2xl:h-52 2xl:w-52 h-20 w-20 md:h-40 md:w-40 rounded-full bg-tertiary z-10"></div>
          <div className="2xl:h-52 2xl:w-52 h-20 w-20 md:h-40 md:w-40 rounded-full bg-tertiary z-10"></div>
          <div className="2xl:h-52 2xl:w-52 h-20 w-20 md:h-40 md:w-40 rounded-full bg-tertiary z-10"></div>
          <div className="2xl:h-52 2xl:w-52 h-20 w-20 md:h-40 md:w-40 rounded-full bg-tertiary z-10"></div>
        </div>
        <div className="2xl:w-full w-screen bg-usp h-[743px] 2xl:-mt-28 -mt-10 md:-mt-20 flex flex-col 2xl:justify-end justify-center space-y-24 items-center px-2 2xl:px-0">
          <div className="text-white 2xl:text-4xl text-3xl">
            Industries we cater to
          </div>
          <div className="grid gap-5 gap-y-16 grid-cols-3 place-items-center 2xl:w-max w-full h-max">
            <div className="2xl:w-48 2xl:h-48 h-28 w-28 md:h-40 md:w-40 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-primary 2xl:h-28 2xl:w-28 h-14 w-14 rounded-full 2xl:-mt-12 -mt-6 flex justify-center items-center">
                <img
                  src={pharma}
                  className="2xl:h-14 2xl:w-14 h-7 w-7"
                  alt=""
                ></img>
              </div>
              <div className="2xl:text-3xl text-lg text-primary mt-6 font-semibold">
                Pharma
              </div>
            </div>
            <div className="2xl:w-48 2xl:h-48 h-28 w-28 md:h-40 md:w-40 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-secondary 2xl:h-28 2xl:w-28 h-14 w-14 rounded-full 2xl:-mt-12 -mt-6 flex justify-center items-center">
                <img
                  src={cosmetics}
                  className="2xl:h-14 2xl:w-14 h-7 w-7"
                  alt=""
                ></img>
              </div>
              <div className="2xl:text-3xl text-lg text-secondary mt-6 font-semibold">
                Cosmetics
              </div>
            </div>
            <div className="2xl:w-48 2xl:h-48 h-28 w-28 md:h-40 md:w-40 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-primary 2xl:h-28 2xl:w-28 h-14 w-14 rounded-full 2xl:-mt-12 -mt-6 flex justify-center items-center">
                <img
                  src={healthcare}
                  className="2xl:h-14 2xl:w-14 h-7 w-7"
                  alt=""
                ></img>
              </div>
              <div className="2xl:text-3xl text-lg text-primary mt-6 font-semibold">
                Healthcare
              </div>
            </div>
            <div className="2xl:w-48 2xl:h-48 h-28 w-28 md:h-40 md:w-40 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-secondary 2xl:h-28 2xl:w-28 h-14 w-14 rounded-full 2xl:-mt-12 -mt-6 flex justify-center items-center">
                <img
                  src={fmcg}
                  className="2xl:h-14 2xl:w-14 h-7 w-7"
                  alt=""
                ></img>
              </div>
              <div className="2xl:text-3xl text-lg text-secondary mt-6 font-semibold">
                FMCG
              </div>
            </div>
            <div className="2xl:w-48 2xl:h-48 h-28 w-28 md:h-40 md:w-40 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-primary 2xl:h-28 2xl:w-28 h-14 w-14 rounded-full 2xl:-mt-12 -mt-6 flex justify-center items-center">
                <img
                  src={automobile}
                  className="2xl:h-14 2xl:w-14 h-7 w-7"
                  alt=""
                ></img>
              </div>
              <div className="2xl:text-3xl text-lg text-primary mt-6 font-semibold">
                Automobile
              </div>
            </div>
            <div className="2xl:w-48 2xl:h-48 h-28 w-28 md:h-40 md:w-40 bg-white flex flex-col items-center rounded-md">
              <div className=" bg-secondary 2xl:h-28 2xl:w-28 h-14 w-14 rounded-full 2xl:-mt-12 -mt-6 flex justify-center items-center">
                <img
                  src={paint}
                  className="2xl:h-14 2xl:w-14 h-7 w-7"
                  alt=""
                ></img>
              </div>
              <div className="2xl:text-3xl text-lg text-secondary mt-6 font-semibold">
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
        <div className="w-full 2xl:block hidden">
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
        <div className="w-full 2xl:hidden block">
          <Splide
            options={{
              rewind: true,
              gap: "2rem",
              type: "loop",
              perPage: 1,
              focus: "center",
              height: "50%",
            }}
            // aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div className="w-full h-48 bg-secondary rounded-md text-white flex">
                <div className="w-1/3">
                  {/* <img src={tube} className="h-96 w-auto" alt=""></img> */}
                </div>
                <div className="flex flex-col space-y-4 w-full 2xl:mt-14 mt-7">
                  <p className="2xl:text-3xl text-xl">Lorem ispum</p>
                  <p className="text-sm 2xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit obcaecati blanditiis aspernatur magnam
                    ducimus. Totam, laboriosam quas. .
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-48 bg-secondary rounded-md text-white flex">
                <div className="w-1/3">
                  {/* <img src={tube} className="h-96 w-auto" alt=""></img> */}
                </div>
                <div className="flex flex-col space-y-4 w-full 2xl:mt-14 mt-7">
                  <p className="2xl:text-3xl text-xl">Lorem ispum</p>
                  <p className="text-sm 2xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit obcaecati blanditiis aspernatur magnam
                    ducimus. Totam, laboriosam quas. .
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-48 bg-secondary rounded-md text-white flex">
                <div className="w-1/3">
                  {/* <img src={tube} className="h-96 w-auto" alt=""></img> */}
                </div>
                <div className="flex flex-col space-y-4 w-full 2xl:mt-14 mt-7">
                  <p className="2xl:text-3xl text-xl">Lorem ispum</p>
                  <p className="text-sm 2xl:text-lg">
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
