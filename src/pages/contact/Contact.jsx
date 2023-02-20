import React from "react";
import website from "../../assets/imgs/website-purple.svg";
import phone from "../../assets/imgs/phone-purple.svg";
import email from "../../assets/imgs/email-purple.svg";

const Contact = () => {
  return (
    <div className="w-full">
      <div className="bg-contact-head w-full h-[277px] relative">
        <div className="text-white text-5xl font-semibold absolute bottom-14 left-60">
          Contact Us
        </div>
      </div>
      <div className="w-full flex justify-center items-center space-x-10 mt-20">
        <div className="h-80 bg-primaryLight w-[30rem] rounded-md flex flex-col space-y-4 p-7">
          <p className="text-2xl text-secondary font-semibold">
            Pune Polytech Pvt. Ltd
          </p>
          <p className="text-md">
            Sub Plot No-1,2,3 Gat No-249/2A.Chakan-
            <br />
            Talegaon Road Kharabwadi,Chakan,
            <br /> Pune-410501.
          </p>
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
        </div>
        <div className="h-80  w-[30rem] flex flex-col space-y-4">
          <input
            type="text"
            className="w-full h-14 rounded-lg bg-tertiary p-3 "
            placeholder="Name"
          />
          <input
            type="text"
            className="w-full h-14 rounded-lg bg-tertiary p-3 "
            placeholder="Email"
          />
          <input
            type="textarea"
            className="w-full h-1/2 rounded-lg bg-tertiary p-3  "
            placeholder="Your message"
          />
          <div className="bg-primaryLight h-12 w-36 text-white flex justify-center items-center rounded-lg">
            Send message
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
