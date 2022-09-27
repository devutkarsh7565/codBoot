import { useContext } from "react";
import { FirestoreContext } from "../Providers/FirestoreProvider";
import useFirestore from "../Hooks/useFirestore";
import { useNavigate } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

const Note = () => {
  const navigate = useNavigate();
  const { removeNotesData } = useFirestore();
  const { storeQuestion, setShowStoreQuestion, showStoreQuestion } =
    useContext(FirestoreContext);
  const handleNavigate = (question) => {
    setShowStoreQuestion(question);
    navigate(`/notes/${question.name}`);
    console.log(showStoreQuestion);
  };
  return (
    <>
      {storeQuestion?.map((questions, index) => (
        <div className="flex flex-col justify-start items-start w-[69rem] border border-green-500 dark:border-[2px] dark:border-blue-500 h-40 rounded-md drop-shadow-lg shadow-green-500 mt-8 p-4">
          <div className="flex justify-around items-center w-full h-20  ">
            <div className="w-1/2 flex justify-start text-3xl px-3 text-white dark:text-[#6F7684] ">
              {questions.name}
            </div>
            <div className="w-1/2 flex justify-end text-white px-3">
              {questions.tags?.map((tag, index) => (
                <div className="flex justify-start items-center mx-1 py-2 px-3 rounded-md border-[2px] border-green-700 dark:border-blue-500 font-NavbarLink text-xl font-light text-green-500 dark:text-blue-500">
                  <span className=" mr-1">{tag}</span>
                  <TiDelete className="text-2xl ml-1 " />
                </div>
              ))}
              <button
                onClick={() => handleNavigate(questions)}
                className="flex justify-start items-center mx-1 py-2 px-3 font-NavbarLink rounded-md border-[2px] border-green-500 dark:border-blue-500 text-xl font-light text-green-500 dark:text-blue-500"
              >
                View
              </button>
              <button
                onClick={() => removeNotesData(questions.id)}
                className="flex justify-start items-center mx-1 py-2 px-3 rounded-md border-[2px]  border-red-700  text-xl font-light dark:font-normal dark:text-red-500 font-NavbarLink text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="flex items-center h-20 px-3 text-2xl font-normal font-NavbarLink text-green-500 dark:text-blue-500">
            {questions.group}
          </div>
        </div>
      ))}
    </>
  );
};

export default Note;
