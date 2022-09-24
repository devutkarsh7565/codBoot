import React, { useState } from "react";
import { createContext } from "react";

export const ContestContext = createContext(null);

const ContestProvider = ({ children }) => {
  const [allContestList, setAllContestList] = useState([]);
  const [platformName, setPlatformName] = useState("all");
  const contestValue = {
    allContestList,
    setAllContestList,
    platformName,
    setPlatformName,
  };
  return (
    <ContestContext.Provider value={contestValue}>
      {children}
    </ContestContext.Provider>
  );
};

export default ContestProvider;
