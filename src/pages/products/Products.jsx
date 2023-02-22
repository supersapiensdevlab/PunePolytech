import React, { useState } from "react";
import product1 from "../../assets/imgs/product1.svg";
import product2 from "../../assets/imgs/product2.svg";
import product3 from "../../assets/imgs/product3.svg";
import product4 from "../../assets/imgs/product4.svg";
import product5 from "../../assets/imgs/product5.svg";
import product6 from "../../assets/imgs/product6.svg";
import product7 from "../../assets/imgs/product7.svg";
import product8 from "../../assets/imgs/product8.svg";
import product9 from "../../assets/imgs/product9.svg";
import product10 from "../../assets/imgs/product10.svg";
import product11 from "../../assets/imgs/product11.svg";
import product12 from "../../assets/imgs/product12.svg";
import bottle1 from "../../assets/imgs/bottle1.svg";
import bottle2 from "../../assets/imgs/bottle2.svg";
import bottle3 from "../../assets/imgs/bottle3.svg";
import bottle4 from "../../assets/imgs/bottle4.svg";
import bottle5 from "../../assets/imgs/bottle5.svg";
import bottle6 from "../../assets/imgs/bottle6.svg";

const Products = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div id="products" className="w-full">
      <div className="bg-product-head w-full 2xl:h-[277px] lg:h-[232px] md:h-[156px] h-[109px] relative">
        <div className="text-white lg:text-5xl text-2xl font-semibold absolute lg:bottom-14 lg:left-60 bottom-4 left-14">
          Products
          <p className="lg:text-sm text-xs">You can contact us on</p>
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-start xl:-ml-20 2xl:-ml-10 lg:-ml-24 mt-10">
        <div className="lg:w-2/3 w-5/6 flex items-center justify-center rounded-sm lg:space-x-5 space-x-4">
          <div
            className="1/3 cursor-pointer text-sm lg:text-lg"
            onClick={() => {
              setSelected(0);
            }}
          >
            Seamless tubes
            <div
              className={`w-full h-1  rounded-md ${
                selected === 0 ? "bg-primaryLight" : "bg-tertiary"
              }`}
            ></div>
          </div>
          <div
            className="1/3 cursor-pointer text-sm lg:text-lg"
            onClick={() => {
              setSelected(1);
            }}
          >
            Bottles
            <div
              className={`w-full h-1  rounded-md ${
                selected === 1 ? "bg-primaryLight" : "bg-tertiary"
              }`}
            ></div>
          </div>
          <div
            className="1/3 cursor-pointer text-sm lg:text-lg"
            onClick={() => {
              setSelected(2);
            }}
          >
            Caps & Closures
            <div
              className={`w-full h-1  rounded-md ${
                selected === 2 ? "bg-primaryLight" : "bg-tertiary"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="w-full lg:mb-28 mb-14 lg:mt-14 mt-10 flex justify-center">
        {selected === 0 ? (
          <div className="w-max grid grid-cols-4 gap-2 lg:gap-5 lg:gap-y-14 gap-y-10 place-items-center">
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product1} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product2} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product3} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product4} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product5} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product6} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product7} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product8} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product9} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product10} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product11} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={product12} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
          </div>
        ) : selected === 1 ? (
          <div className="w-max grid grid-cols-4 gap-2 lg:gap-5 lg:gap-y-14 gap-y-10 place-items-center">
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={bottle1} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={bottle2} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={bottle3} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={bottle4} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={bottle5} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
            <div className="lg:h-72 h-24 md:h-36 w-max flex flex-col items-center space-y-2">
              <img src={bottle6} className="h-full w-auto" alt=""></img>
              <p className=" text-xs lg:text-lg">Lorem Ipsum</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Products;
