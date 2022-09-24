import React from "react";
import useContestButton from "../Hooks/useContestButton";
import ContestButton from "./ContestButton";

const ContestButtonList = ({ contestApi }) => {
  const { contestsName } = useContestButton();
  return (
    <div className="max-w-6xl h-20 flex justify-evenly items-center p-5">
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
