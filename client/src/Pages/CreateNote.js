import React from "react";
import { useContext } from "react";
import { CreateNotesContext } from "../Providers/CreateNotesProvider";
import { ToastContainer, toast } from "react-toastify";
import { BiLinkExternal } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.css";
import Editor from "../Components/Editor";
import useFirestore from "../Hooks/useFirestore";

import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const { addNotesData } = useFirestore();
  const navigate = useNavigate();
  const { createNotes, setCreateNotes, tags, setTags, code, setCode } =
    useContext(CreateNotesContext);
  console.log(`tags:${tags}`);

  const obj = {
    body: createNotes,
    tags: tags,
    code: code,
  };
  const resetCreateNotesPage = () => {
    setCreateNotes(null);
    setTags([]);
    setCode("");
    console.log(`createNotes:${createNotes}`);
  };
  const storeQuestion = () => {
    addNotesData(obj);

    toast.success("🦄 Saved Sucessfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    resetCreateNotesPage();
    // console.log(code);
    setTimeout(() => {
      navigate("/notes");
    }, 4000);
  };

  if (createNotes === null) {
    return (
      <>
        <h1 className="text-white">click to plus button</h1>
      </>
    );
  }
  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col items-start justify-start w-[72rem]">
          <div className="text-green-500 text-3xl m-4 mt-8 ">
            {createNotes?.group}
          </div>
          <div className="text-white text-5xl m-4">
            Problem Name - {createNotes?.name}
          </div>
          <div className="flex justify-start items-center m-4">
            <h1 className="text-white text-2xl mx-2">Problem Link</h1>
            <a href={createNotes?.url} className="text-green-500 text-3xl">
              <BiLinkExternal />
            </a>
          </div>
          <div className="my-4 flex flex-col justify-start items-end">
            <Editor />
            <button
              className="py-2 px-3 rounded-md text-green-500 border border-green-500 text-xl font-light mr-2 focus:bg-black"
              onClick={() => {
                storeQuestion();
                // resetCreateNotesPage();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />{" "}
    </>
  );
};

export default CreateNote;
