import React from "react";

const Careers = () => {
  return (
    <div className="w-full">
      <div className="bg-career-head w-full lg:h-[277px] h-[109px] relative">
        <div className="text-white lg:text-5xl text-2xl font-semibold absolute lg:bottom-14 lg:left-60 bottom-4 left-14">
          Careers
          <p className="lg:text-sm text-xs">
            You can contact us on{" "}
            <span className="bg-white px-1 rounded-md text-para ml-1">
              sales@punepolytech.com
            </span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center lg:space-y-7 space-y-3 lg:mt-24 mt-8">
        <div className="2xl:w-2/3 lg:w-5/6 w-11/12 rounded-lg  shadow-md shadow-lightgray border border-gray h-24 2xl:h-36 lg:h-32 2xl:px-10 lg:px-7 px-5 flex flex-col justify-center space-y-3">
          <p className="2xl:text-3xl lg:text-2xl text-lg text-primaryLight font-semibold">
            Graphic Designer
          </p>
          <p className="lg:text-md text-sm text-para">
            Min. 2-5 years Experience
          </p>
        </div>
        <div className="2xl:w-2/3 lg:w-5/6 w-11/12 rounded-lg  shadow-md shadow-lightgray border border-gray h-24 2xl:h-36 lg:h-32 2xl:px-10 lg:px-7 px-5 flex flex-col justify-center space-y-3">
          <p className="2xl:text-3xl lg:text-2xl text-lg text-primaryLight font-semibold">
            Sales Manager
          </p>
          <p className="lg:text-md text-sm text-para">
            Min. 2-5 years Experience
          </p>
        </div>
        <div className="2xl:w-2/3 lg:w-5/6 w-11/12 rounded-lg  shadow-md shadow-lightgray border border-gray h-24 2xl:h-36 lg:h-32 2xl:px-10 lg:px-7 px-5 flex flex-col justify-center space-y-3">
          <p className="2xl:text-3xl lg:text-2xl text-lg text-primaryLight font-semibold">
            System Engineer
          </p>
          <p className="lg:text-md text-sm text-para">
            Min. 2-5 years Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
