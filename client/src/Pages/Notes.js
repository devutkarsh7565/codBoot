import { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import useFirestore from "../Hooks/useFirestore";
import { useContext } from "react";
import { FirestoreContext } from "../Providers/FirestoreProvider";
import { Outlet, useOutlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Note from "../Components/Note";
import SearchQuery from "../Components/SearchQuery";
import { DarkThemeContext } from "../Providers/DarkThemeProvider";

const Notes = () => {
  const { isDarkMode } = useContext(DarkThemeContext);
  const [loading, setLoading] = useState(false);
  const { getNotesData, removeNotesData, editNotesData, getQueryData } =
    useFirestore();
  const { isAuth } = useAuth();
  const [input, setInput] = useState("");
  const {
    storeQuestion,
    setStoreQuestion,
    showStoreQuestion,
    setShowStoreQuestion,
    notesQuery,
  } = useContext(FirestoreContext);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    getNotesData();
  }, [isAuth, editNotesData]);
  useEffect(() => {
    setStoreQuestion([]);
  }, [!isAuth]);

  const handleSubmit = (e) => {
    if (e.key === "ENTER") {
      getQueryData(e.target.value);
    }
    getQueryData(input);

    // e.target.value = "";
  };

  const outlet = useOutlet();
  if (outlet)
    return (
      <div className="w-full h-full flex justify-center ">
        <Outlet />
      </div>
    );

  return (
    <>
      {loading ? (
        <div className="mt-20 pt-20">
          {isDarkMode ? (
            <ClimbingBoxLoader
              className="mt-20 pt-20"
              color={"#0776F1"}
              loading={loading}
              // cssOverride={override}
              size={90}
            />
          ) : (
            <ClimbingBoxLoader
              className="mt-20 pt-20"
              color={"#22C55E"}
              loading={loading}
              // cssOverride={override}
              size={90}
            />
          )}
        </div>
      ) : (
        <div className="xl:w-[1280px] lg:w-[62rem] md:w-[47rem] sm:w-[40rem] xs:w-[28rem] w-[23rem] flex flex-col justify-start items-center my-10">
          <div className="flex sm:justify-between justify-center sm:gap-0 gap-10 items-center h-16 w-full py-5">
            <h1 className="text-green-500 dark:text-blue-500 md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-light">
              NOTES
            </h1>
            <input
              className="sm:px-3 px-2 sm:w-[325px] xs:w-[275px] w-[250px] py-1 sm:py-2 md:text-xl text-lg bg-[#232429] dark:bg-[#EFEBFA]  font-normal dark:text-slate-600 text-slate-400 dark:border-blue-500 border-green-500 border-2 outline-none mb-3"
              type="text"
              placeholder="Type to Search Question"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                handleSubmit(e);
              }}
              onKeyPress={(e) => handleSubmit(e)}
            />
          </div>

          {input === "" ? <Note /> : <SearchQuery />}
        </div>
      )}
    </>
  );
};

export default Notes;
