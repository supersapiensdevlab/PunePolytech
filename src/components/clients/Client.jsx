import React from "react";
import drdo from "../../assets/imgs/drdo.svg";
import finolex from "../../assets/imgs/finolex.svg";
import honeywell from "../../assets/imgs/honeywell.svg";
import barc from "../../assets/imgs/barc.svg";

const Client = () => {
  return (
    <div id="clients" className="w-full my-24 flex flex-col space-y-14">
      <div className="text-3xl font-bold text-secondary text-center">
        Our Clients
      </div>
      <div className="flex w-full justify-center items-center 2xl:space-x-12 lg:space-x-8 space-x-3">
        <img
          src={drdo}
          className="2xl:h-20 lg:h-16 md:h-14 w-auto h-6"
          alt=""
        ></img>
        <img
          src={honeywell}
          className="2xl:h-20 lg:h-16 md:h-14 w-auto h-6"
          alt=""
        ></img>
        <img
          src={barc}
          className="2xl:h-20 lg:h-16 md:h-14 w-auto h-6 "
          alt=""
        ></img>
        <img
          src={finolex}
          className="2xl:h-20 lg:h-16 md:h-14 w-auto h-6"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Client;
