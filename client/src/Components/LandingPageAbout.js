import Lottie from "lottie-react";
import animationData from "../LottieFIles/LottieNotes.json";
import contestData from "../LottieFIles/LottieContest.json";

const LandingPageAbout = () => {
  return (
    <>
      <div
        id="landingPage"
        className="flex flex-col justify-start items-center xl:w-[75rem] lg:w-[65rem] my-8 py-8 "
      >
        <h1 className="text-4xl text-white mt-16 pt-8">
          Why Use <span className="text-green-500 text-5xl">CodeX</span>{" "}
        </h1>
        <div className="flex justify-between items-center text-white text-3xl w-[70rem] h-[24rem]">
          <div className="w-[30rem] mx-5 ">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptas autem corrupti fugiat esse animi iusto ipsam sit a
              labore?
            </p>
          </div>
          <div className=" w-[35rem]">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
        <div className="flex justify-between items-center text-white text-3xl w-full h-[24rem]">
          <div className=" w-[30rem]">
            <Lottie animationData={contestData} loop={true} />
          </div>
          <div className="w-[30rem] mx-5 ">
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
