import React from "react";
import ContestHeader from "./ContestHeader";
import { useParams } from "react-router-dom";
import ContestButtonList from "./ContestButtonList";
import ContestPlatform from "./ContestPlatform";

const CompleteContest = () => {
  const { contest } = useParams();
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center">
      <ContestHeader />
      <ContestButtonList contestApi={contest} />
      <ContestPlatform />
    </div>
  );
};

export default CompleteContest;
