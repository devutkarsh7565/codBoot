import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import useFirestore from "../Hooks/useFirestore";
import { FirestoreContext } from "../Providers/FirestoreProvider";
import SavedEditor from "./SavedEditor";
const IndividualNoteDetail = () => {
  const navigate = useNavigate();
  const { showStoreQuestion, edit, setEdit, editCode, setEditCode } =
    useContext(FirestoreContext);
  const handleEdit = () => {
    setEditCode(showStoreQuestion?.code);
    setEdit(true);
  };
  const { getNotesData, removeNotesData, addNotesData, editNotesData } =
    useFirestore();
  const handleSave = (data) => {
    // const realData = {
    //   code: editCode,
    //   name: data.name,
    //   group: data.group,
    //   url: data.url,
    //   tags: data.tags,
    // };
    editNotesData(data);
    // removeNotesData(data.id);
    setEditCode(editCode);
    setEdit(false);
    navigate("/notes");
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col items-start justify-start w-[72rem]">
          <div className="text-green-500 text-4xl m-4 dark:text-blue-500 font-NavbarLink ">
            {showStoreQuestion?.group}
          </div>
          <div className="text-white text-5xl dark:text-[#6F7684] font-NavbarLink m-4">
            Problem Name - {showStoreQuestion?.name}
          </div>
          <div className="flex justify-start items-center m-4">
            <h1 className="text-white text-3xl mx-2 dark:text-[#6F7684] font-NavbarLink">
              Problem Link
            </h1>
            <a
              href={showStoreQuestion?.url}
              target="_blank"
              className="text-green-500 dark:text-blue-500 text-3xl"
            >
              <BiLinkExternal />
            </a>
          </div>
          <div className="my-4 flex flex-col justify-start items-end">
            <SavedEditor />
            {edit ? (
              <button
                className="py-2 px-3 rounded-md  dark:text-blue-500 font-NavbarLink dark:border-blue-500 text-green-500 border-[2px] border-green-500 text-xl font-light mr-2 dark:focus:bg-blue-500 dark:focus:text-white focus:bg-black"
                onClick={() => {
                  handleSave(showStoreQuestion);
                  // handleNavigate();
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="py-2 px-3 rounded-md dark:text-blue-500 font-NavbarLink dark:border-blue-500  text-green-500 border-[2px] border-green-500 text-xl font-light mr-2 focus:bg-black"
                onClick={() => {
                  handleEdit();
                  // handleNavigate();
                }}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualNoteDetail;
