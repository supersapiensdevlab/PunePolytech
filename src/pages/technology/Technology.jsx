import React from "react";
import printing from "../../assets/imgs/printing.svg";
import foiling from "../../assets/imgs/foiling.svg";
import silk from "../../assets/imgs/silk.svg";
import labelling from "../../assets/imgs/labelling.svg";
import techtube from "../../assets/imgs/techtube.svg";

const Technology = () => {
  return (
    <div className="w-full">
      <div className="bg-tech-head w-full h-[277px] relative">
        <div className="text-white text-5xl font-semibold absolute bottom-14 left-60">
          Technology
        </div>
      </div>
      <div className="w-full flex flex-col items-center space-y-10 mt-20 mb-96">
        <div className="w-2/3">
          <p className="text-2xl text-secondary font-semibold">Decoration</p>
        </div>
        <div className="w-2/3 flex space-x-20">
          <div className="w-1/2 flex flex-col space-y-5 justify-center items-center">
            <p>Lorem Ipsum dolor ci et dummy text.</p>
            <div className="relative">
              <img src={techtube} alt="" className="z-10 relative"></img>
              <div className="w-[21rem] h-40 bg-secondary absolute top-40 z-0"></div>
              <div className="w-[8rem] h-24 bg-primaryLight absolute top-72 right-20 z-0"></div>
            </div>
          </div>
          <div className="w-1/2 grid grid-cols-2 gap-x-6 ">
            <div className="flex flex-col space-y-3 items-center">
              <div className="bg-primaryLight h-52 w-52 rounded-md flex justify-center items-center">
                <img src={printing} alt=""></img>
              </div>
              <p>Dry offset printing </p>
            </div>
            <div className="flex flex-col space-y-3 items-center">
              <div className="bg-secondary h-52 w-52 rounded-md flex justify-center items-center">
                <img src={foiling} alt=""></img>
              </div>
              <p>Hot foiling</p>
            </div>
            <div className="flex flex-col space-y-3 items-center">
              <div className="bg-secondary h-52 w-52 rounded-md flex justify-center items-center">
                <img src={silk} alt=""></img>
              </div>
              <p>Silk screen printing </p>
            </div>
            <div className="flex flex-col space-y-3 items-center">
              <div className="bg-primaryLight h-52 w-52 rounded-md flex justify-center items-center">
                <img src={labelling} alt=""></img>
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
