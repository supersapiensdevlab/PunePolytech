import React, { useState } from "react";
import head from "../../assets/imgs/gallery-hero.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../../../node_modules/@splidejs/react-splide/dist/css/themes/splide-sea-green.min.css";
import gallery1 from "../../assets/imgs/gallery1.svg";
import gallery2 from "../../assets/imgs/gallery2.svg";
import gallery3 from "../../assets/imgs/gallery3.svg";
import gallery4 from "../../assets/imgs/gallery4.svg";
import gallery5 from "../../assets/imgs/gallery5.svg";
import gallery6 from "../../assets/imgs/gallery6.svg";
import gallery7 from "../../assets/imgs/gallery7.svg";

const Gallery = () => {
  const [selected, setSelected] = useState(head);

  const handleImagePreview = (index) => {
    switch (index) {
      case 1:
        setSelected(gallery1);
        break;
      case 2:
        setSelected(gallery2);
        break;
      case 3:
        setSelected(gallery3);
        break;
      case 4:
        setSelected(gallery4);
        break;
      case 5:
        setSelected(gallery5);
        break;
      case 6:
        setSelected(gallery6);
        break;
      case 7:
        setSelected(gallery7);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full">
      <div className="bg-product-head w-full lg:h-[277px] h-[109px] relative">
        <div className="text-white lg:text-5xl text-2xl font-semibold absolute lg:bottom-14 lg:left-60 bottom-4 left-14">
          Gallery
        </div>
      </div>
      <div className="w-full flex justify-center items-center px-5 lg:px-0">
        <img src={selected} className="mt-5 lg:h-96 w-auto h-60" alt=""></img>
      </div>
      <div className="lg:w-4/5 w-full block m-auto">
        <Splide
          options={{
            rewind: true,
            gap: "2rem",
            perPage: 7,
            focus: "center",
          }}
          // aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div
              className="lg:h-36 lg:w-36 h-12 w-12 md:h-20 md:w-20 cursor-pointer"
              onClick={() => {
                handleImagePreview(1);
              }}
            >
              <img
                src={gallery1}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="lg:h-36 lg:w-36 h-12 w-12 md:h-20 md:w-20  cursor-pointer"
              onClick={() => {
                handleImagePreview(2);
              }}
            >
              <img
                src={gallery2}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="lg:h-36 lg:w-36 h-12 w-12 md:h-20 md:w-20  cursor-pointer"
              onClick={() => {
                handleImagePreview(3);
              }}
            >
              <img
                src={gallery3}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="lg:h-36 lg:w-36 h-12 w-12 md:h-20 md:w-20  cursor-pointer"
              onClick={() => {
                handleImagePreview(4);
              }}
            >
              <img
                src={gallery4}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="lg:h-36 lg:w-36 h-12 w-12 md:h-20 md:w-20  cursor-pointer"
              onClick={() => {
                handleImagePreview(5);
              }}
            >
              <img
                src={gallery5}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="lg:h-36 lg:w-36 h-12 w-12 md:h-20 md:w-20  cursor-pointer"
              onClick={() => {
                handleImagePreview(6);
              }}
            >
              <img
                src={gallery6}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              className="lg:h-36 lg:w-36 h-12 w-12 md:h-20 md:w-20  cursor-pointer"
              onClick={() => {
                handleImagePreview(7);
              }}
            >
              <img
                src={gallery7}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Gallery;
