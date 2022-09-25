import Lottie from "lottie-react";
import animationData from "../LottieFIles/LottieNotes.json";
import contestData from "../LottieFIles/LottieContest.json";
import lightThemeAnimationData from "../LottieFIles/lightThemeLandingPage1.json";
import lightThemeContestData from "../LottieFIles/lightThemeLandingPage2.json";
import useDarkTheme from "../Hooks/useDarkTheme";

const LandingPageAbout = () => {
  const { isDarkMode } = useDarkTheme();
  return (
    <>
      <div
        id="landingPage"
        className="flex flex-col justify-start items-center xl:w-[75rem] lg:w-[65rem] my-8 py-8 "
      >
        <h1 className="text-4xl text-white mt-16 dark:text-[#6F7684] pt-8">
          Why Use{" "}
          <span className="text-green-500 dark:text-blue-500 text-5xl">
            CodeX
          </span>{" "}
        </h1>
        <div className="flex justify-between items-center text-white text-3xl w-[70rem] h-[24rem]">
          <div className="w-[30rem] mx-5 ">
            <p className="dark:text-[#6F7684]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptas autem corrupti fugiat esse animi iusto ipsam sit a
              labore?
            </p>
          </div>
          <div className=" w-[35rem]">
            {isDarkMode ? (
              <Lottie animationData={animationData} loop={true} />
            ) : (
              <Lottie animationData={lightThemeAnimationData} loop={true} />
            )}
          </div>
        </div>
        <div className="flex justify-between items-center text-white text-3xl w-full h-[24rem]">
          <div className=" w-[30rem]">
            {isDarkMode ? (
              <Lottie animationData={contestData} loop={true} />
            ) : (
              <Lottie animationData={lightThemeContestData} loop={true} />
            )}
          </div>
          <div className="w-[30rem] mx-5 dark:text-[#6F7684]">
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
