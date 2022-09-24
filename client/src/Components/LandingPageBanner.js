import React from "react";
import Lottie from "lottie-react";
import animationData from "../LottieFIles/landing1.json";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

const LandingPageBanner = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-20">
        <div className="flex justify-around items-center xl:w-[75rem] lg:w-[65rem] h-[50rem] ">
          <div className="flex flex-col justify-center items-start text-5xl text-green-500 xl:w-[25rem] lg:w-[21rem] ">
            <div className="my-1 text-white">Easiest Way</div>
            <div className="my-1 text-white">to create Your</div>
            <div className="text-6xl my-1">CODING NOTES</div>
          </div>
          <div className=" w-[35rem]">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>

        <ScrollIntoView selector="#landingPage">
          <div className="">
            <FaChevronDown className="animate-bounce mx-auto text-3xl  text-green-500 " />
          </div>
        </ScrollIntoView>
      </div>
    </div>
  );
};

export default LandingPageBanner;
