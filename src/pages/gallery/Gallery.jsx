import React from "react";
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
  return (
    <div className="w-full">
      <div className="bg-product-head w-full h-[277px] relative">
        <div className="text-white text-5xl font-semibold absolute bottom-14 left-60">
          Gallery
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <img src={head} className="mt-5" alt=""></img>
      </div>
      <div className="w-4/5 block m-auto">
        <Splide
          options={{
            rewind: true,
            gap: "2rem",
            type: "loop",
            perPage: 7,
            focus: "center",
          }}
          // aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div className="h-36 w-36">
              <img
                src={gallery1}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-36 w-36">
              <img
                src={gallery2}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-36 w-36">
              <img
                src={gallery3}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-36 w-36">
              <img
                src={gallery4}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-36 w-36">
              <img
                src={gallery5}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-36 w-36">
              <img
                src={gallery6}
                className="h-full w-full object-cover"
                alt=""
              ></img>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-36 w-36">
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
