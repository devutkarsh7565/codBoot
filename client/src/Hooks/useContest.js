import React from "react";
import { useContext } from "react";
import { ContestContext } from "../Providers/ContestProvider";
const useContest = () => {
  const { allContestList, setAllContestList, platformName, setPlatformName } =
    useContext(ContestContext);
  return (
    <div>
      {(allContestList, setAllContestList, platformName, setPlatformName)}
    </div>
  );
};

export default useContest;
