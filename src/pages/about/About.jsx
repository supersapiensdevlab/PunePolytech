import React from "react";
import director from "../../assets/imgs/director.svg";
import quotes from "../../assets/imgs/qoutes.svg";

const About = () => {
  return (
    <div className="w-full">
      <div className="bg-about-head w-full h-[277px] relative">
        <div className="text-white text-5xl font-semibold absolute bottom-14 left-60">
          About us
        </div>
      </div>
      <div className="w-full flex justify-center my-10">
        <p className="w-3/5 text-lg text-para">
          As an ISO 9001:2015 Certified Plastic Blow Molding Manufacturer, we
          specialize in Custom and Open Blow-Molded bottles, containers and
          shapes. Here at Pune Polytech Pvt Ltd (PPPL), we are dedicated to
          implement a world class quality management system (QMS) to provide
          superb customer service and quick turn-around for short-to-medium
          production runs.
        </p>
      </div>
      <div className="flex justify-center space-x-10">
        <div className="h-80 w-96 bg-tertiary"></div>
        <p className="w-1/3 text-lg text-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
          consectetur adipiscing
        </p>
      </div>
      <div
        id="vision"
        className="w-full bg-about-vision h-[613px] -mt-40 flex justify-center items-end space-x-10"
      >
        <div className="text-white border border-white h-64 w-max mb-20 rounded-md flex flex-col p-4 space-y-3">
          <p className="text-2xl">Vision</p>
          <p className="text-sm w-[26rem]">
            We aspire to become a Global Plastic Tube Manufacturing Company by
            offering Tubes at competitive price with very high Quality standards
            to all our customers worldwide. We aim to reduce the time ‘From
            Concept to Market’ substantially for our customers.
            <br /> By adopting the latest manufacturing technologies we work
            towards reaching 100% quality and 100% on-time delivery to develop &
            delight our customers
          </p>
        </div>
        <div className="text-white border border-white h-64 w-max mb-20 rounded-md flex flex-col p-4 space-y-3">
          <p className="text-2xl">Mission</p>
          <p className="text-sm w-[26rem]">
            Pune Polytech Pvt Ltd will use highly skilled people and technology
            to produce product better and faster. Our work force will be trained
            in critical skill areas to remain competitive. We will incorporate a
            culture of Rapid Response that seeks the solution to any challenge.
          </p>
        </div>
      </div>
      <div
        id="managing_directors"
        className="w-full flex flex-col items-center space-y-5 mt-10 "
      >
        <p className="text-2xl text-secondary font-semibold w-7/12 text-left">
          Our Managing director
        </p>
        <div className="flex h-40 w-7/12  bg-primaryLight rounded-md items-center">
          <img src={director} className="h-full w-auto" alt=""></img>
          <div className="flex flex-col space-y-2 ml-10">
            <p className="text-white text-2xl">Anil Gupta</p>
            <p className="text-para w-5/6">
              As an ISO 9001:2015 Certified Plastic Blow Molding Manufacturer,
              we specialize in Custom and Open Blow-Molded bottles, containers
              and shapes. Here at Pune Polytech Pvt Ltd (PPPL),
            </p>
          </div>
          <img src={quotes} alt="" className="-ml-40"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
