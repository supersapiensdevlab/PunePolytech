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
      className="h-80 w-full bg-secondary flex flex-col 2xl:flex-row 2xl:justify-around 2xl:items-center justify-start items-start text-white p-4 md:p-6 space-y-4 2xl:space-y-0"
    >
      <div className="flex flex-col space-y-4">
        <p className="text-2xl text-primaryLight font-semibold">
          Pune Polytech Pvt. Ltd
        </p>
        <p className="2xl:text-md text-sm">
          Sub Plot No-1,2,3 Gat No-249/2A.Chakan-
          <br className="2xl:block hidden" />
          Talegaon Road Kharabwadi,Chakan,
          <br className="2xl:block hidden" /> Pune-410501.
        </p>
      </div>
      <div className="flex flex-col space-y-3 justify-between ">
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
      <div className="flex 2xl:space-x-10 space-x-5">
        <img src={bsi} className="2xl:h-24 h-16 w-auto" alt=""></img>
        <img src={footer} className="2xl:h-24 h-16  w-auto" alt=""></img>
      </div>
    </div>
  );
};

export default Footer;
