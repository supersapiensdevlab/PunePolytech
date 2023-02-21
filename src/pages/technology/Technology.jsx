import React from "react";
import printing from "../../assets/imgs/printing.svg";
import foiling from "../../assets/imgs/foiling.svg";
import silk from "../../assets/imgs/silk.svg";
import labelling from "../../assets/imgs/labelling.svg";
import techtube from "../../assets/imgs/techtube.svg";

const Technology = () => {
  return (
    <div className="w-full">
      <div className="bg-tech-head w-full lg:h-[277px] h-[109px] relative">
        <div className="text-white lg:text-5xl text-2xl font-semibold absolute lg:bottom-14 lg:left-60 bottom-4 left-14">
          Technology
        </div>
      </div>
      <div className="w-full flex flex-col items-center lg:space-y-10 space-y-5 mt-20 lg:mb-96 mb-0 p-5 2xl:p-0 lg:p-10">
        <div className="lg:w-2/3 w-full">
          <p className="text-2xl text-secondary font-semibold">Decoration</p>
        </div>
        <div className="2xl:w-2/3 lg:3/4 w-full flex lg:flex-row flex-col lg:space-x-20 space-x-0 space-y-5 lg:space-y-0 ">
          <div className="lg:w-1/2 w-full flex flex-col space-y-5 justify-center items-center">
            <p>Lorem Ipsum dolor ci et dummy text.</p>
            <div className="relative ">
              <img src={techtube} alt="" className="z-10 relative"></img>
              <div className="lg:w-[21rem] w-[16rem] lg:h-40 h-24 md:h-40 md:w-96 bg-secondary absolute lg:top-40 top-28 md:top-52 z-0"></div>
              <div className="w-[8rem] lg:w-[8rem] 2xl:w-[6rem] lg:h-24 h-16 md:w-48 md:h-24 bg-primaryLight absolute lg:top-72 top-48 md:top-80 lg:right-20 right-8 md:right-24 z-0"></div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-x-6 gap-y-3 lg:gap-y-0 ">
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
