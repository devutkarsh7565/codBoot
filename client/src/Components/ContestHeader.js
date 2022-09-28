import React from "react";
import { useParams } from "react-router-dom";

const ContestHeader = () => {
  const { contest } = useParams();
  const plateform = contest || "all";
  return (
    <div className="w-full sm:h-28  flex justify-center items-center flex-wrap">
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-light text-white p-4 font-NavbarLink dark:text-[#6F7684]">
        Running and Upcoming Contest of {plateform}
      </h1>
    </div>
  );
};

export default ContestHeader;
