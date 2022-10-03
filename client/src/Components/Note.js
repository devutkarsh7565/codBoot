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
        <div className="flex flex-col justify-start items-start w-full lg:w-[69rem] border border-green-500 dark:border-[2px] dark:border-blue-500 lg:max-h-56  rounded-md drop-shadow-lg shadow-green-500  p-4">
          <div className="flex flex-col md:flex-row md:justify-around md:items-center justify-start items-start w-full lg:h-20 md:min-h-[90px] sm:min-h-[100px] xs:min-h-[120px] flex-wrap lg:flex-nowrap md:gap-0 sm:gap-5 gap-3 py-4">
            <div className="md:w-1/2 w-full h-2/5 flex justify-start text-3xl px-3 text-white dark:text-[#6F7684] ">
              {questions.name}
            </div>
            <div className="md:w-1/2 h-3/5 w-full flex md:justify-end flex-wrap sm:gap-0 gap-5 text-white md:px-3">
              {questions.tags?.map((tag, index) => (
                <div className="flex justify-start items-center  mx-1 py-2 px-3 rounded-md border-[2px] border-green-700 dark:border-blue-500 font-NavbarLink text-xl font-light text-green-500 dark:text-blue-500">
                  <span className=" mr-1">{tag}</span>
                  <TiDelete className="text-2xl ml-1 " />
                </div>
              ))}
              <button
                onClick={() => handleNavigate(questions)}
                className="flex justify-start items-center mx-1 py-2 px-3 font-NavbarLink rounded border-[2px] border-green-500 dark:border-blue-500 text-xl font-light text-green-500 dark:text-blue-500"
              >
                View
              </button>
              <button
                onClick={() => removeNotesData(questions.id)}
                className="flex justify-start items-center mx-1 py-2 px-3 rounded border-[2px]  border-red-700  text-xl font-light dark:font-normal dark:text-red-500 font-NavbarLink text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="w-full flex items-center md:text-3xl md:h-20 sm:min-h-[100px] xs:min-h-[120px] px-3 text-2xl font-normal font-NavbarLink text-green-500 dark:text-blue-500">
            {questions.group}
          </div>
        </div>
      ))}
    </>
  );
};

export default Note;
