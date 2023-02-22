import React from "react";
import director from "../../assets/imgs/director.svg";
import quotes from "../../assets/imgs/qoutes.svg";

const About = () => {
  return (
    <div className="w-full">
      <div className="bg-about-head w-full 2xl:h-[277px] lg:h-[232px] md:h-[156px] h-[109px] relative">
        <div className="text-white lg:text-5xl text-2xl font-semibold absolute lg:bottom-14 lg:left-60 bottom-4 left-14">
          About us
        </div>
      </div>
      <div className="w-full flex justify-center my-10">
        <p className="lg:w-3/5 w-11/12 lg:text-lg text-md  text-para">
          As an ISO 9001:2015 Certified Plastic Blow Molding Manufacturer, we
          specialize in Custom and Open Blow-Molded bottles, containers and
          shapes. Here at Pune Polytech Pvt Ltd (PPPL), we are dedicated to
          implement a world class quality management system (QMS) to provide
          superb customer service and quick turn-around for short-to-medium
          production runs.
        </p>
      </div>
      <div className="flex justify-center space-x-10">
        <div className="lg:h-80 lg:w-96 h-48 w-60 bg-tertiary"></div>
        <p className="w-1/3 text-lg text-para lg:block hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
          consectetur adipiscing
        </p>
      </div>
      <div
        id="vision"
        className="w-full bg-about-vision h-[613px] lg:-mt-40 -mt-24 flex lg:flex-row flex-col lg:justify-center justify-end lg:items-end items-center lg:space-x-10 p-20 lg:p-0"
      >
        <div className="text-white hover:bg-tertiary hover:bg-opacity-50 border border-white lg:h-64 h-52 w-80 lg:w-max lg:mb-20 mb-5 rounded-md flex flex-col p-4 lg:space-y-3 space-y-1">
          <p className="lg:text-2xl text-lg">Vision</p>
          <p className="lg:text-sm text-xs lg:w-[26rem] w-full">
            We aspire to become a Global Plastic Tube Manufacturing Company by
            offering Tubes at competitive price with very high Quality standards
            to all our customers worldwide. We aim to reduce the time ‘From
            Concept to Market’ substantially for our customers.
            <br /> By adopting the latest manufacturing technologies we work
            towards reaching 100% quality and 100% on-time delivery to develop &
            delight our customers
          </p>
        </div>
        <div className="text-white hover:bg-tertiary hover:bg-opacity-50 border border-white lg:h-64 h-40 w-80 lg:w-max lg:mb-20  rounded-md flex flex-col p-4 lg:space-y-3 space-y-1">
          <p className="lg:text-2xl text-lg">Mission</p>
          <p className="lg:text-sm text-xs lg:w-[26rem] w-full">
            Pune Polytech Pvt Ltd will use highly skilled people and technology
            to produce product better and faster. Our work force will be trained
            in critical skill areas to remain competitive. We will incorporate a
            culture of Rapid Response that seeks the solution to any challenge.
          </p>
        </div>
      </div>
      <div
        id="managing_directors"
        className="w-full flex flex-col items-center lg:space-y-5 space-y-3 mt-10 px-2 "
      >
        <p className="text-2xl  text-secondary font-semibold lg:w-7/12 w-full md:w-5/6 text-left">
          Our Managing director
        </p>
        <div className="flex lg:h-40 h-28 lg:w-7/12 w-full md:w-5/6 bg-primaryLight rounded-md items-center">
          <img src={director} className="h-full w-auto" alt=""></img>
          <div className="flex flex-col lg:space-y-2 space-y-0 lg:ml-10 ml-2">
            <p className="text-white lg:text-2xl text-sm">Anil Gupta</p>
            <p className="text-para w-ful lg:text-md text-xs">
              As an ISO 9001:2015 Certified Plastic Blow Molding Manufacturer,
              we specialize in Custom and Open Blow-Molded bottles, containers
              and shapes. Here at Pune Polytech Pvt Ltd (PPPL),
            </p>
          </div>
          <img src={quotes} alt="" className="-ml-40m lg:block hidden"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
