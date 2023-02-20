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
      <div className="flex w-full justify-center items-center space-x-12">
        <img src={drdo} className="h-20 w-auto" alt=""></img>
        <img src={honeywell} className="h-20 w-auto" alt=""></img>
        <img src={barc} className="h-20 w-auto" alt=""></img>
        <img src={finolex} className="h-20 w-auto" alt=""></img>
      </div>
    </div>
  );
};

export default Client;
