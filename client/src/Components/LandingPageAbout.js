import Lottie from "lottie-react";
import animationData from "../LottieFIles/LottieNotes.json";
import contestData from "../LottieFIles/LottieContest.json";
import lightThemeAnimationData from "../LottieFIles/lightThemeLandingPage1.json";
import lightThemeContestData from "../LottieFIles/lightThemeLandingPage2.json";

import { useContext } from "react";
import { DarkThemeContext } from "../Providers/DarkThemeProvider";

const LandingPageAbout = () => {
  const { isDarkMode } = useContext(DarkThemeContext);
  return (
    <>
      <div
        id="landingPage"
        className="flex flex-col justify-start gap-5 items-center min-h-screen w-full my-8 py-8 "
      >
        <h1 className="text-4xl text-white mt-16 dark:text-[#6F7684] pt-8">
          Why Use{" "}
          <span className="text-green-500 dark:text-blue-500 text-5xl">
            CodeX
          </span>{" "}
        </h1>
        <div className="flex lg:justify-between  flex-wrap-reverse justify-center items-center text-white text-3xl w-full h-full">
          <div className="xl:w-[30rem] lg:w-[28rem] md:w-[22rem] mx-5  flex items-center">
            <p className="dark:text-[#6F7684]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptas autem corrupti fugiat esse animi iusto ipsam sit a
              labore?
            </p>
          </div>
          <div className=" xl:w-[35rem] lg:w-[32rem] md:w-[22rem] w-full">
            {/* {isDarkMode ? <h1>light</h1> : <h1>dark</h1>} */}
            {isDarkMode ? (
              <Lottie animationData={lightThemeAnimationData} loop={true} />
            ) : (
              <Lottie animationData={animationData} loop={true} />
            )}
          </div>
        </div>
        <div className="flex lg:justify-between justify-center items-center gap-16 my-4 flex-wrap text-white text-3xl w-full h-full">
          <div className="xl:w-[35rem] lg:w-[32rem] md:w-[22rem]">
            {/* <Lottie animationData={contestData} loop={true} /> */}
            {isDarkMode ? (
              <>
                <Lottie animationData={lightThemeContestData} loop={true} />
              </>
            ) : (
              <>
                <Lottie animationData={contestData} loop={true} />
              </>
            )}
          </div>
          <div className="xl:w-[30rem] lg:w-[28rem] md:w-[22rem] mx-5 dark:text-[#6F7684]">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptas autem corrupti fugiat esse animi iusto ipsam sit a
              labore?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageAbout;
