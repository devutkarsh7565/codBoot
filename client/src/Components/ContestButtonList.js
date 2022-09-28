import React from "react";
import useContestButton from "../Hooks/useContestButton";
import ContestButton from "./ContestButton";

const ContestButtonList = ({ contestApi }) => {
  const { contestsName } = useContestButton();
  return (
    <div className="w-full lg:h-20 flex lg:justify-evenly justify-start md:gap-0 gap-2 flex-wrap lg:flex-nowrap items-center lg:p-5 py-3 sm:px-1 pl-4 ">
      {contestsName.map((platform) => (
        <ContestButton
          platformRoute={contestApi}
          platformApi={platform.name}
          platformButton={platform.buttonName}
        />
      ))}
    </div>
  );
};

export default ContestButtonList;
