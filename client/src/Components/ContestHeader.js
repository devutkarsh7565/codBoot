import React from "react";
import { useParams } from "react-router-dom";

const ContestHeader = () => {
  const { contest } = useParams();
  const plateform = contest || "all";
  return (
    <div className="w-full h-28 flex justify-center items-center">
      <h1 className="text-5xl font-light text-white p-4 font-hero">
        Running and Upcoming Contest of {plateform}
      </h1>
    </div>
  );
};

export default ContestHeader;
