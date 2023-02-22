import React from "react";
import printing from "../../assets/imgs/printing.svg";
import foiling from "../../assets/imgs/foiling.svg";
import silk from "../../assets/imgs/silk.svg";
import labelling from "../../assets/imgs/labelling.svg";
import techtube from "../../assets/imgs/techtube.svg";
import comp1 from "../../assets/imgs/comp1.svg";
import comp2 from "../../assets/imgs/comp2.svg";
import comp3 from "../../assets/imgs/comp3.svg";

const Technology = () => {
  return (
    <div className="w-full">
      <div className="bg-tech-head w-full 2xl:h-[277px] lg:h-[232px] md:h-[156px] h-[109px] relative">
        <div className="text-white lg:text-5xl text-2xl font-semibold absolute lg:bottom-14 lg:left-60 bottom-4 left-14">
          Technology
        </div>
      </div>
      <div className="h-[465px] w-full bg-tech-comp flex flex-col justify-center items-center space-y-4">
        <div className="w-full space-x-4 flex justify-center items-center">
          <div className="h-max w-max bg-white flex flex-col items-center px-3 pb-5 rounded-lg">
            <img
              src={comp1}
              className="xl:h-72 xl:w-72 lg:h-64 lg:w-64 md:h-60 md:w-60 h-28 w-32 object-cover"
              alt=""
            ></img>
            <p className="md:text-lg text-sm text-secondary font-semibold">
              MONOLAYER TUBE
            </p>
          </div>
          <div className="h-max w-max bg-white flex flex-col items-center px-3 pb-5 rounded-lg">
            <img
              src={comp2}
              className="xl:h-72 xl:w-72 lg:h-64 lg:w-64 md:h-60 md:w-60 h-28 w-32  object-cover"
              alt=""
            ></img>
            <p className="md:text-lg text-sm text-secondary font-semibold">
              3 LAYER TUBE
            </p>
          </div>
          <div className="h-max w-max bg-white lg:flex flex-col items-center px-3 pb-5 rounded-lg hidden ">
            <img
              src={comp3}
              className="xl:h-72 xl:w-72 lg:h-64 lg:w-64 md:h-60 md:w-60 h-52 w-52 object-cover"
              alt=""
            ></img>
            <p className="text-lg text-secondary font-semibold">5 LAYER TUBE</p>
          </div>
        </div>
        <p className="text-para md:text-sm text-xs md:w-2/3 w-5/6 self-center ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          aspernatur. ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt, aspernatur.
        </p>
      </div>
      <div className="w-full flex flex-col items-center lg:space-y-10 space-y-5 mt-20 lg:mb-96 mb-0 p-5 2xl:p-0 lg:p-10">
        <div className="2xl:w-2/3 lg:w-3/4 w-full">
          <p className="text-2xl text-secondary font-semibold">Decoration</p>
        </div>
        <div className="2xl:w-2/3 lg:3/4 w-full flex lg:flex-row flex-col lg:space-x-20 space-x-0 space-y-5 lg:space-y-0 ">
          <div className="lg:w-1/2 w-full flex flex-col space-y-5 justify-center items-center">
            <p>Lorem Ipsum dolor ci et dummy text.</p>
            <div className="relative ">
              <img src={techtube} alt="" className="z-10 relative"></img>
              <div className="2xl:w-[21rem] xl:w-[23rem] w-[16rem] 2xl:h-40 lg:w-[23rem] lg:h-36 h-24 md:h-40 md:w-96 bg-secondary absolute lg:top-40 top-28 md:top-52 z-0"></div>
              <div className="w-[8rem] lg:w-[8rem] xl:w-[10rem] 2xl:w-[8rem] lg:h-24 h-16 md:w-48 md:h-24 bg-primaryLight absolute lg:top-72 top-48 md:top-80 2xl:right-20 lg:right-28 xl:right-32 right-8 md:right-24 z-0"></div>
            </div>
          </div>
          <div className="lg:w-max w-full grid grid-cols-2 md:grid-cols-4 h-max lg:grid-cols-2 lg:gap-x-8 gap-x-3 gap-y-3 lg:gap-y-3 place-items-center ">
            <div className="flex flex-col space-y-3 items-center">
              <div className="bg-primaryLight lg:h-52 lg:w-52 h-32 w-32 rounded-md flex justify-center items-center">
                <img
                  src={printing}
                  alt=""
                  className="h-20 w-auto lg:h-max"
                ></img>
              </div>
              <p>Dry offset printing </p>
            </div>
            <div className="flex flex-col space-y-3 items-center">
              <div className="bg-secondary lg:h-52 lg:w-52 h-32 w-32 rounded-md flex justify-center items-center">
                <img
                  src={foiling}
                  alt=""
                  className="h-20 w-auto lg:h-max"
                ></img>
              </div>
              <p>Hot foiling</p>
            </div>
            <div className="flex flex-col space-y-3 items-center">
              <div className="bg-secondary lg:h-52 lg:w-52 h-32 w-32 rounded-md flex justify-center items-center">
                <img src={silk} alt="" className="h-20 w-auto lg:h-max"></img>
              </div>
              <p>Silk screen printing </p>
            </div>
            <div className="flex flex-col space-y-3 items-center">
              <div className="bg-primaryLight lg:h-52 lg:w-52 h-32 w-32 rounded-md flex justify-center items-center">
                <img
                  src={labelling}
                  alt=""
                  className="h-20 w-auto lg:h-max"
                ></img>
              </div>
              <p>Labeling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
