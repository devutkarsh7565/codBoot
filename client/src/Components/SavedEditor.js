import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { CreateNotesContext } from "../Providers/CreateNotesProvider";
import { useContext } from "react";
import { FirestoreContext } from "../Providers/FirestoreProvider";

import "@wcj/dark-mode";
const SavedEditor = () => {
  const { createNotes, setCreateNotes, tags, setTags, code, setCode } =
    useContext(CreateNotesContext);
  const { showStoreQuestion, edit, setEdit, editCode, setEditCode } =
    useContext(FirestoreContext);
  // const [editCode, setEditCode] = useState(showStoreQuestion?.code);

  // const [code, setCode] = useState("");
  const [dark, setDark] = useState(false);

  var num = 0;
  const handleClick = () => {
    num++;
    if (num % 2 == 0) {
      setDark(false);
    } else {
      setDark(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  };

  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  };

  // hello hello

  const color = () => {
    if (dark) {
      return "#0F3D3E";
    } else {
      return "#E8F9FD";
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center px-3 h-12">
          {/* <div>
            {" "}
            <input
              className="bg-black outline-none text-white focus:border-green-600 focus:border py-2 px-3 rounded-md "
              type="text"
              placeholder="Add a Tag"
              onKeyDown={handleKeyDown}
            />
          </div> */}
          <div className="flex justify-start items-center text-white">
            {showStoreQuestion?.tags.map((tag, index) => (
              <div
                className="flex justify-start items-center mx-1 py-2 px-3 rounded-md border-[2px] font-NavbarLink dark:text-blue-500 border-green-700 dark:border-blue-500 text-xl font-light text-green-500"
                key={index}
              >
                <span className="mr-1">{tag}</span>
                <TiDelete
                  onclick={() => removeTag(index)}
                  className="text-2xl ml-1 "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          {" "}
          <div className="my-2">
            {" "}
            <dark-mode
              onclick={handleClick}
              style={{ fontSize: 20 }}
              dark="Dark"
              permanent
              light="Light"
            ></dark-mode>
          </div>
          {edit ? (
            <CodeEditor
              value={editCode}
              language="cpp"
              placeholder="Please enter your Notes."
              onChange={(evn) => setEditCode(evn.target.value)}
              padding={15}
              style={{
                fontSize: 20,
                backgroundColor: { color },
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
              className="w-[72rem] h-[25rem] rounded-xl border-green-500 border-2 mb-3"
            />
          ) : (
            <CodeEditor
              value={showStoreQuestion?.code}
              language="cpp"
              placeholder="Please enter your Notes."
              onChange={(evn) => showStoreQuestion.setCode(evn.target.value)}
              padding={15}
              disabled
              style={{
                fontSize: 20,
                backgroundColor: { color },
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
              className="w-[72rem] h-[25rem] rounded-xl border-green-500 border-2 mb-3"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SavedEditor;
