import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { CreateNotesContext } from "../Providers/CreateNotesProvider";

import "@wcj/dark-mode";

const Editor = () => {
  const { createNotes, setCreateNotes, tags, setTags, code, setCode } =
    useContext(CreateNotesContext);

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
      <div className="w-full">
        <div className="flex justify-between items-center flex-wrap sm:flex-nowrap sm:gap-0 gap-6 px-3 h-12 w-full">
          <div className="sm:w-1/2 w-full">
            {" "}
            <input
              className="bg-black dark:bg-[#EFEBFA] dark:border-2 outline-none text-white dark:focus:border-blue-500 focus:border-green-600 border border-[#787878] focus:border py-2 px-3 rounded-md "
              type="text"
              placeholder="Add a Tag"
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="flex justify-end items-center text-white sm:w-1/2 w-full ">
            {tags.map((tag, index) => (
              <div
                className="flex justify-start items-center mx-1 py-2 px-3 rounded-md border-2 border-green-700 dark:border-blue-600  text-xl font-light text-green-500 dark:text-blue-500"
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
        <div className="sm:mt-8 mt-16 pt-5">
          {" "}
          <div className="sm:my-2 mb-1">
            {" "}
            <dark-mode
              onclick={handleClick}
              style={{ fontSize: 20 }}
              dark="Dark"
              permanent
              light="Light"
            ></dark-mode>
          </div>
          <CodeEditor
            value={code}
            language="cpp"
            placeholder="Please enter your Notes."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontSize: 20,
              backgroundColor: { color },
              overflowY: "scroll",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
            className="w-full h-[25rem]  rounded-xl border-green-500 border-2 mb-3"
          />{" "}
        </div>
      </div>
    </>
  );
};

export default Editor;
