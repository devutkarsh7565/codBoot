import React from "react";
import Lottie from "lottie-react";
import animationData from "../LottieFIles/landing1.json";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";
import { DarkThemeContext } from "../Providers/DarkThemeProvider";
import { useContext } from "react";
import lightAnimationData from "../LottieFIles/lightThemeLandingBanner.json";

const LandingPageBanner = () => {
  const { isDarkMode, switchTheme } = useContext(DarkThemeContext);
  return (
    <div>
      <div className="flex flex-col items-center w-full  lg:mb-20">
        <div className="flex lg:justify-around justify-center  flex-wrap items-center w-full h-[50rem] ">
          <div className="flex flex-col justify-center sm:items-start items-center xl:text-5xl md:text-4xl sm:text-3xl text-4xl  text-green-500 xl:w-[25rem] lg:w-[21rem] md:w-[15rem] sm:w-[13rem] w-full">
            <div className="my-1 text-white dark:text-[#6F7684]">
              Easiest Way
            </div>
            <div className="my-1 text-white dark:text-[#6F7684]">
              to create Your
            </div>
            <div className="text-8  text-5xl md:text-5xl sm:text-4xl my-1 dark:text-blue-500">
              CODING NOTES
            </div>
          </div>
          <div className=" xl:w-[35rem] md:w-[29rem] sm:w-[24rem] w-full">
            {isDarkMode ? (
              <Lottie animationData={lightAnimationData} loop={true} />
            ) : (
              <Lottie animationData={animationData} loop={true} />
            )}
          </div>
        </div>

        <ScrollIntoView selector="#landingPage">
          <div className="">
            <FaChevronDown className="animate-bounce mx-auto text-3xl  text-green-500 dark:text-blue-500 " />
          </div>
        </ScrollIntoView>
      </div>
    </div>
  );
};

export default LandingPageBanner;
