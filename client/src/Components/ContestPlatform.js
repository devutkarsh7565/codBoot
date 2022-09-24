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
        <div className="flex flex-col justify-start items-center gap-10">
          <LoadingComponent />
          <LoadingComponent />
          <LoadingComponent />
          <LoadingComponent />
        </div>
      </>
    );
  return (
    <div className="max-w-5xl min-h-screen ">
      <div className="w-full h-full flex flex-col justify-start items-center gap-10 ">
        {allContestList?.map((contest) => (
          <div className="flex jusitify-between items-center gap-6 p-5 w-full border border-green-500 rounded-md text-white">
            <div className="flex justify-start items-center gap-6 p-5 w-[615px] max-h-[155px]">
              {" "}
              <div className="flex flex-col justify-start items-center gap-3 px-2 py-3  mx-3 w-[90px]">
                <h1 className="text-sm font-light w-full">STARTS ON</h1>
                <div className="flex flex-col justify-start items-center text-xl font-medium w-full">
                  {" "}
                  <span>{contest?.startTime?.match(day)?.slice(0, 1)}</span>
                  <span>May</span>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-3 pl-6 pr-3 py-3 border-l border-green-500 mx-1 max-w-[550px]">
                <h1 className="text-2xl">{contest.name}</h1>
                <div className="flex justify-start items-center gap-2">
                  <span>Contest</span>
                  <span>|</span>
                  <div className="flex justify-start items-center gap-1">
                    <span>
                      <AiOutlineClockCircle />
                    </span>
                    <span>{contest.startTime.match(pattern)}</span>
                    <span>PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 border  border-green-500 py-3 px-5">
              <a href={contest.url} target="_blank">
                COMPETE HERE
              </a>

              <MdOutlineKeyboardArrowRight className="text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContestPlatform;
