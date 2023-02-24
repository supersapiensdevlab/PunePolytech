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
import tube from "../../assets/imgs/tube.svg";
import qoutes from "../../assets/imgs/quotes-dark.svg";
import usp1 from "../../assets/imgs/usp1.svg";
import usp2 from "../../assets/imgs/usp2.svg";
import usp3 from "../../assets/imgs/usp3.svg";
import usp4 from "../../assets/imgs/usp4.svg";

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
          className="w-max 2xl:px-16 2xl:py-2 lg:px-12 lg:py-1.5 px-8 py-1 2xl:text-lg lg:text-lg text-sm bg-white rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 2xl:mt-40 xl:mt-28 lg:mt-20 md:mt-60 -mt-14"
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
        <div className="w-full h-max flex justify-center 2xl:space-x-5 lg:space-x-6 space-x-7 md:space-x-5 mt-10">
          <div className="flex md:flex-row flex-col space-y-5 md:space-y-0 2xl:space-x-5 lg:space-x-6  md:space-x-5">
            <div className="2xl:h-52 2xl:w-52 lg:h-48 lg:w-48 h-24 w-24 md:h-40 md:w-40 rounded-full bg-secondary z-10 flex justify-center items-center">
              <img
                src={usp1}
                className="2xl:h-32 2xl:w-32 lg:h-28 lg:w-28 md:h-24 md:w-24 h-14 w-14"
                alt=""
              ></img>
            </div>

            <div className="2xl:h-52 2xl:w-52 lg:h-48 lg:w-48 h-24 w-24 md:h-40 md:w-40 rounded-full bg-secondary z-10 flex justify-center items-center">
              <img
                src={usp2}
                className="2xl:h-32 2xl:w-32 lg:h-28 lg:w-28 md:h-24 md:w-24 h-14 w-14"
                alt=""
              ></img>
            </div>
          </div>
          <div className="flex md:flex-row flex-col space-y-5 md:space-y-0  2xl:space-x-5 lg:space-x-6  md:space-x-5">
            <div className="2xl:h-52 2xl:w-52 lg:h-48 lg:w-48 h-24 w-24 md:h-40 md:w-40 rounded-full bg-secondary z-10 flex justify-center items-center">
              <img
                src={usp3}
                className="2xl:h-32 2xl:w-32 lg:h-28 lg:w-28 md:h-24 md:w-24 h-14 w-14"
                alt=""
              ></img>
            </div>
            <div className="2xl:h-52 2xl:w-52 lg:h-48 lg:w-48 h-24 w-24 md:h-40 md:w-40 rounded-full bg-secondary z-10 flex justify-center items-center">
              <img
                src={usp4}
                className="2xl:h-32 2xl:w-32 lg:h-28 lg:w-28 md:h-24 md:w-24 h-14 w-14"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className="2xl:w-full w-screen bg-usp md:h-[743px] h-[496px] 2xl:-mt-28 -mt-40 md:-mt-20 flex flex-col  space-y-24 items-center px-2 2xl:px-0">
          <div className="text-white 2xl:text-4xl text-3xl md:mt-48 mt-48">
            Industries we cater to
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center md:-mt-96 -mt-52">
        <div className="grid md:gap-5 md:gap-y-20 gap-y-10 gap-0 grid-cols-3 place-items-center md:w-max w-full h-max">
          <div className="2xl:w-56 2xl:h-56 xl:w-52 xl:h-52 lg:h-48 lg:w-48 h-28 w-28 md:h-44 md:w-44 bg-white flex flex-col items-center rounded-md">
            <div className=" bg-primaryLight 2xl:h-32 2xl:w-32 xl:h-28 xl:w-28 lg:h-24 lg:w-24 md:h-20 md:w-20 h-14 w-14 rounded-full 2xl:-mt-14 xl:-mt-11 lg:-mt-9 md:-mt-8 -mt-6 flex justify-center items-center">
              <img
                src={pharma}
                className="2xl:h-20 2xl:w-20 xl:h-16 xl:w-16 lg:h-14 lg:w-14 md:h-12 md:w-12 h-7 w-7"
                alt=""
              ></img>
            </div>
            <div className="2xl:text-3xl md:text-2xl text-lg text-primaryLight mt-6 font-semibold">
              Pharma
            </div>
          </div>
          <div className="2xl:w-56 2xl:h-56 xl:w-52 xl:h-52 h-28 w-28 lg:h-48 lg:w-48 md:h-44 md:w-44 bg-white flex flex-col items-center rounded-md">
            <div className=" bg-secondary 2xl:h-32 2xl:w-32 xl:h-28 xl:w-28 lg:h-24 lg:w-24 md:h-20 md:w-20 h-14 w-14 rounded-full 2xl:-mt-14 xl:-mt-11 lg:-mt-9 md:-mt-8 -mt-6 flex justify-center items-center">
              <img
                src={cosmetics}
                className="2xl:h-20 2xl:w-20 xl:h-16 xl:w-16 lg:h-14 lg:w-14 md:h-12 md:w-12 h-7 w-7"
                alt=""
              ></img>
            </div>
            <div className="2xl:text-3xl md:text-2xl text-lg text-secondary mt-6 font-semibold">
              Cosmetics
            </div>
          </div>
          <div className="2xl:w-56 2xl:h-56 xl:w-52 xl:h-52 h-28 w-28 lg:h-48 lg:w-48 md:h-44 md:w-44 bg-white flex flex-col items-center rounded-md">
            <div className=" bg-primaryLight 2xl:h-32 2xl:w-32 xl:h-28 xl:w-28 lg:h-24 lg:w-24 md:h-20 md:w-20 h-14 w-14 rounded-full 2xl:-mt-14 xl:-mt-11 lg:-mt-9 md:-mt-8 -mt-6 flex justify-center items-center">
              <img
                src={healthcare}
                className="2xl:h-20 2xl:w-20 xl:h-16 xl:w-16 lg:h-14 lg:w-14 md:h-12 md:w-12 h-7 w-7"
                alt=""
              ></img>
            </div>
            <div className="2xl:text-3xl md:text-2xl text-lg text-primaryLight mt-6 font-semibold">
              Healthcare
            </div>
          </div>
          <div className="2xl:w-56 2xl:h-56 xl:w-52 xl:h-52 h-28 w-28 lg:h-48 lg:w-48 md:h-44 md:w-44 bg-white flex flex-col items-center rounded-md">
            <div className=" bg-secondary 2xl:h-32 2xl:w-32 xl:h-28 xl:w-28 lg:h-24 lg:w-24 md:h-20 md:w-20 h-14 w-14 rounded-full 2xl:-mt-14 xl:-mt-11 lg:-mt-9 md:-mt-8 -mt-6 flex justify-center items-center">
              <img
                src={fmcg}
                className="2xl:h-20 2xl:w-20 xl:h-16 xl:w-16 lg:h-14 lg:w-14 md:h-12 md:w-12 h-7 w-7"
                alt=""
              ></img>
            </div>
            <div className="2xl:text-3xl md:text-2xl text-lg text-secondary mt-6 font-semibold">
              FMCG
            </div>
          </div>
          <div className="2xl:w-56 2xl:h-56 xl:w-52 xl:h-52 h-28 w-28 lg:h-48 lg:w-48 md:h-44 md:w-44 bg-white flex flex-col items-center rounded-md">
            <div className=" bg-primaryLight 2xl:h-32 2xl:w-32 xl:h-28 xl:w-28 lg:h-24 lg:w-24 md:h-20 md:w-20 h-14 w-14 rounded-full 2xl:-mt-14 xl:-mt-11 lg:-mt-9 md:-mt-8 -mt-6 flex justify-center items-center">
              <img
                src={automobile}
                className="2xl:h-20 2xl:w-20 xl:h-16 xl:w-16 lg:h-14 lg:w-14 md:h-12 md:w-12 h-7 w-7"
                alt=""
              ></img>
            </div>
            <div className="2xl:text-3xl md:text-2xl text-lg text-primaryLight mt-6 font-semibold">
              Automobile
            </div>
          </div>
          <div className="2xl:w-56 2xl:h-56 xl:w-52 xl:h-52 h-28 w-28 lg:h-48 lg:w-48 md:h-44 md:w-44 bg-white flex flex-col items-center rounded-md">
            <div className=" bg-secondary 2xl:h-32 2xl:w-32 xl:h-28 xl:w-28 lg:h-24 lg:w-24 md:h-20 md:w-20 h-14 w-14 rounded-full 2xl:-mt-14 xl:-mt-11 lg:-mt-9 md:-mt-8 -mt-6 flex justify-center items-center">
              <img
                src={paint}
                className="2xl:h-20 2xl:w-20 xl:h-16 xl:w-16 lg:h-14 lg:w-14 md:h-12 md:w-12 h-7 w-7"
                alt=""
              ></img>
            </div>
            <div className="2xl:text-3xl md:text-2xl text-lg text-secondary mt-6 font-semibold">
              Paint
            </div>
          </div>
        </div>
      </div>
      <div id="testimonials" className="w-full mt-24">
        <div className="text-3xl font-bold text-secondary text-center">
          Testimonials
        </div>
        <div className="w-full lg:block hidden">
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
              <div className="w-full h-64 bg-secondary rounded-md text-white relative mt-10 mb-24">
                <div className="flex flex-col space-y-4 mt-14 absolute left-64 pr-5">
                  <p className="text-3xl">Lorem ispum</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit obcaecati blanditiis aspernatur magnam
                    ducimus. Totam, laboriosam quas. .
                  </p>
                </div>
              </div>
              <img
                src={tube}
                className=" w-auto object-cover absolute h-96 -top-3 bottom-2  z-20"
                alt=""
              ></img>
              <img
                src={qoutes}
                className="absolute xl:right-20 lg:top-20 right-12"
                alt=""
              ></img>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-64 bg-secondary rounded-md text-white relative mt-10 mb-24">
                <div className="flex flex-col space-y-4 mt-14 absolute left-64 pr-5">
                  <p className="text-3xl">Lorem ispum</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit obcaecati blanditiis aspernatur magnam
                    ducimus. Totam, laboriosam quas. .
                  </p>
                </div>
              </div>
              <img
                src={tube}
                className=" w-auto object-cover absolute h-96 -top-3 bottom-2  z-20"
                alt=""
              ></img>
              <img
                src={qoutes}
                className="absolute top-20 right-20"
                alt=""
              ></img>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-64 bg-secondary rounded-md text-white relative mt-10 mb-24">
                <div className="flex flex-col space-y-4 mt-14 absolute left-64 pr-5">
                  <p className="text-3xl">Lorem ispum</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit obcaecati blanditiis aspernatur magnam
                    ducimus. Totam, laboriosam quas. .
                  </p>
                </div>
              </div>
              <img
                src={tube}
                className=" w-auto object-cover absolute h-96 -top-3 bottom-2  z-20"
                alt=""
              ></img>
              <img
                src={qoutes}
                className="absolute top-20 right-20"
                alt=""
              ></img>
            </SplideSlide>
          </Splide>
        </div>
        <div className="w-full lg:hidden block">
          <Splide
            options={{
              rewind: true,
              gap: "2rem",
              type: "loop",
              perPage: 1,
              focus: "center",
              height: "40%",
            }}
            // aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div className="w-full md:h-48 h-32 bg-secondary rounded-md text-white relative md:my-14 my-11">
                <div className="flex flex-col md:space-y-4 space-y-2  2xl:mt-14 md:mt-7 mt-2 absolute md:left-48 left-32 md:pr-5 pr-2">
                  <p className="2xl:text-3xl md:text-xl text-md">Lorem ispum</p>
                  <p className="md:text-sm 2xl:text-lg text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit obcaecati blanditiis aspernatur magnam
                    ducimus. Totam, laboriosam quas. .
                  </p>
                </div>
              </div>
              <img
                src={tube}
                className=" w-auto object-cover absolute md:h-72 h-48 -md:top-1 top-3 bottom-2 -left-1  z-20"
                alt=""
              ></img>
              <img
                src={qoutes}
                className="absolute md:top-16 md:right-20 top-14 right-7 h-14 w-14 md:h-20 md:w-20"
                alt=""
              ></img>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full md:h-48 h-32 bg-secondary rounded-md text-white relative md:my-14 my-11">
                <div className="flex flex-col md:space-y-4 space-y-2  2xl:mt-14 md:mt-7 mt-2 absolute md:left-48 left-32 md:pr-5 pr-2">
                  <p className="2xl:text-3xl md:text-xl text-md">Lorem ispum</p>
                  <p className="md:text-sm 2xl:text-lg text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit obcaecati blanditiis aspernatur magnam
                    ducimus. Totam, laboriosam quas. .
                  </p>
                </div>
              </div>
              <img
                src={tube}
                className=" w-auto object-cover absolute md:h-72 h-48 -md:top-1 top-3 bottom-2 -left-1  z-20"
                alt=""
              ></img>
              <img
                src={qoutes}
                className="absolute md:top-16 md:right-20 top-14 right-7 h-14 w-14 md:h-20 md:w-20"
                alt=""
              ></img>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full md:h-48 h-32 bg-secondary rounded-md text-white relative md:my-14 my-11">
                <div className="flex flex-col md:space-y-4 space-y-2  2xl:mt-14 md:mt-7 mt-2 absolute md:left-48 left-32 md:pr-5 pr-2">
                  <p className="2xl:text-3xl md:text-xl text-md">Lorem ispum</p>
                  <p className="md:text-sm 2xl:text-lg text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit obcaecati blanditiis aspernatur magnam
                    ducimus. Totam, laboriosam quas. .
                  </p>
                </div>
              </div>
              <img
                src={tube}
                className=" w-auto object-cover absolute md:h-72 h-48 -md:top-1 top-3 bottom-2 -left-1  z-20"
                alt=""
              ></img>
              <img
                src={qoutes}
                className="absolute md:top-16 md:right-20 top-14 right-7 h-14 w-14 md:h-20 md:w-20"
                alt=""
              ></img>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Home;
