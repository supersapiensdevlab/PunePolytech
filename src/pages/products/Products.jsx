import React from "react";
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

const Products = () => {
  return (
    <div id="products" className="w-full">
      <div className="bg-product-head w-full h-[277px] relative">
        <div className="text-white text-5xl font-semibold absolute bottom-14 left-60">
          Products
          <p className="text-sm">You can contact us on</p>
        </div>
      </div>
      <div className="w-full my-28 flex justify-center">
        <div className="w-max grid grid-cols-4 gap-5 gap-y-14 place-items-center">
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product1} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product2} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product3} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product4} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product5} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product6} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product7} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product8} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product9} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product10} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product11} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
          <div className="h-72 w-max flex flex-col items-center space-y-2">
            <img src={product12} className="h-full w-auto" alt=""></img>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
