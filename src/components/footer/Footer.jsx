import React from "react";
import website from "../../assets/imgs/website.svg";
import phone from "../../assets/imgs/phone.svg";
import email from "../../assets/imgs/email.svg";
import bsi from "../../assets/imgs/bsi.svg";
import footer from "../../assets/imgs/footer.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      className="h-80 w-full bg-secondary flex justify-around items-center text-white"
    >
      <div className="flex flex-col space-y-4">
        <p className="text-2xl text-primaryLight font-semibold">
          Pune Polytech Pvt. Ltd
        </p>
        <p className="text-md">
          Sub Plot No-1,2,3 Gat No-249/2A.Chakan-
          <br />
          Talegaon Road Kharabwadi,Chakan,
          <br /> Pune-410501.
        </p>
      </div>
      <div className="flex flex-col space-y-3 justify-between">
        <div className="flex space-x-2">
          <img src={website} className="h-5 w-5" alt=""></img>
          <p>www.punepolytech.com</p>
        </div>
        <div className="flex space-x-2">
          <img src={phone} className="h-5 w-5" alt=""></img>
          <p>+918796237771, +918308819480</p>
        </div>
        <div className="flex space-x-2">
          <img src={email} className="h-5 w-5" alt=""></img>
          <p>sales@punepolytech.com</p>
        </div>
      </div>
      <div className="flex space-x-10">
        <img src={bsi} className="h-24 w-auto" alt=""></img>
        <img src={footer} className="h-24 w-auto" alt=""></img>
      </div>
    </div>
  );
};

export default Footer;
