import { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useKontestApi from "../Hooks/useKontestApi";
import groovyWalkAnimation from "../LottieFIles/loading.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { ContestContext } from "../Providers/ContestProvider";
import LoadingComponent from "./LoadingComponent";

const ContestPlatform = () => {
  const [loading, setLoading] = useState(false);
  const { allContestList, setAllContestList, platformName, setPlatformName } =
    useContext(ContestContext);

  var pattern = /[0-2][0-9]:[0-9][0-9]/gi;
  var day = /[0-9][0-9] /gi;

  const { getAllRunningAndUpcomingContest } = useKontestApi();
  const loadContestList = async () => {
    setLoading(true);
    const contest = await getAllRunningAndUpcomingContest(platformName);
    setLoading(false);

    if (contest) {
      setAllContestList(contest);
    }
  };

  useEffect(() => {
    loadContestList();
    console.log("useEffect called");
    console.log(`platformName:${platformName}`);
  }, [platformName]);

  if (loading)
    return (
      <>
        <div className="w-full flex flex-col justify-start items-center gap-10">
          <LoadingComponent />
          <LoadingComponent />
          <LoadingComponent />
          <LoadingComponent />
        </div>
      </>
    );
  return (
    <div className="w-full lg:max-w-4xl min-h-screen md:my-2 my-5 ">
      <div className="w-full h-full flex flex-col justify-start items-center gap-10 ">
        {allContestList?.map((contest) => (
          <div className="flex jusitify-between items-center  md:gap-6 sm:p-5 p-3 w-[370px] sm:w-full  border-[2px] border-green-500 font-NavbarLink dark:border-blue-500 rounded-md text-white">
            <div className="flex justify-start items-center sm:gap-6 gap-1 sm:p-5  md:w-[615px] sm:w-[375px] w-[300px] max-h-[155px]">
              {" "}
              <div className="flex flex-col justify-start items-center gap-3 px-2 py-3  mx-3 sm:w-[90px] w-[50px] ">
                <h1 className="text-sm font-light w-full dark:text-[#6F7684]">
                  STARTS ON
                </h1>
                <div className="flex flex-col justify-start items-center sm:text-xl text-normal md:font-medium font-light w-full">
                  {" "}
                  <span className="dark:text-[#6F7684]">
                    {contest?.startTime?.match(day)?.slice(0, 1)}
                  </span>
                  <span className="dark:text-[#6F7684]">May</span>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-3 md:pl-6 pl-3 pr-1 sm:pr-3 py-3  border-l-[2px] border-green-500 dark:border-blue-500 mx-1 max-w-[550px]">
                <h1 className="md:text-2xl sm:text-xl dark:text-[#6F7684]">
                  {contest.name}
                </h1>
                <div className="flex justify-start items-center gap-2 dark:text-[#6F7684]">
                  <span className="">Contest</span>
                  <span>|</span>
                  <div className="flex justify-start items-center gap-1 dark:text-[#6F7684]">
                    <span>
                      <AiOutlineClockCircle />
                    </span>
                    <span>{contest.startTime.match(pattern)}</span>
                    <span>PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center md:gap-2 border-[2px] dark:border-blue-500 dark:text-[#6F7684]  border-green-500 md:text-normal text-sm md:py-3 md:px-5 px-2 py-2">
              <a
                className="md:text-normal text-sm"
                href={contest.url}
                target="_blank"
              >
                COMPETE HERE
              </a>

              <MdOutlineKeyboardArrowRight className="sm:text-xl sm:block hidden" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContestPlatform;
