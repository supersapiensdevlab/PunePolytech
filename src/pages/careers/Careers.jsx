import React from "react";

const Careers = () => {
  return (
    <div className="w-full">
      <div className="bg-career-head w-full h-[277px] relative">
        <div className="text-white text-5xl font-semibold absolute bottom-14 left-60">
          Careers
          <p className="text-sm">
            You can contact us on{" "}
            <span className="bg-white px-1 rounded-md text-para ml-1">
              sales@punepolytech.com
            </span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center space-y-7 mt-24">
        <div className="w-2/3 rounded-lg  shadow-md shadow-lightgray border border-gray h-36 px-10 flex flex-col justify-center space-y-3">
          <p className="text-3xl text-primaryLight font-semibold">
            Graphic Designer
          </p>
          <p className="text-md text-para">Min. 2-5 years Experience</p>
        </div>
        <div className="w-2/3 rounded-lg  shadow-md shadow-lightgray border border-gray h-36 px-10 flex flex-col justify-center space-y-3">
          <p className="text-3xl text-primaryLight font-semibold">
            Sales Manager
          </p>
          <p className="text-md text-para">Min. 2-5 years Experience</p>
        </div>
        <div className="w-2/3 rounded-lg  shadow-md shadow-lightgray border border-gray h-36 px-10 flex flex-col justify-center space-y-3">
          <p className="text-3xl text-primaryLight font-semibold">
            System Engineer
          </p>
          <p className="text-md text-para">Min. 2-5 years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
