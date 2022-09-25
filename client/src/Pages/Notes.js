import { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import useFirestore from "../Hooks/useFirestore";
import { useContext } from "react";
import { FirestoreContext } from "../Providers/FirestoreProvider";
import { Outlet, useOutlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Note from "../Components/Note";
import SearchQuery from "../Components/SearchQuery";

const Notes = () => {
  // const { question } = useParams();
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
    setLoading(true);
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
          <ClimbingBoxLoader
            className="mt-20 pt-20"
            color={"#22C55E"}
            loading={loading}
            // cssOverride={override}
            size={90}
          />
        </div>
      ) : (
        <div className="w-[72rem] flex flex-col justify-start items-center my-10">
          <div className="flex justify-between items-center h-16 w-[68rem] py-5">
            <h1 className="text-green-500 text-6xl font-light">NOTES</h1>
            <input
              className="px-3 py-2 text-xl bg-[#232429] font-light text-slate-400 border-green-500 border-2 outline-none mb-3"
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
