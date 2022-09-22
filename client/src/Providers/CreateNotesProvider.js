import { useEffect } from "react";
import { useState, createContext } from "react";
import io from "socket.io-client";

export const CreateNotesContext = createContext(null);

const CreateNotesProvider = ({ children }) => {
  const socket = io.connect("http://localhost:10043");
  const [createNotes, setCreateNotes] = useState(null);
  const [tags, setTags] = useState([]);
  const [code, setCode] = useState("");
  const newQuestionContextValue = {
    createNotes,
    setCreateNotes,
    tags,
    setTags,
    code,
    setCode,
  };

  const handleOnSendNewProblem = (data) => {
    console.log(data);
    setCreateNotes(data);
  };

  useEffect(() => {
    socket.on("send-new-problem", handleOnSendNewProblem);

    return () => {
      socket.off("send-new-problem", handleOnSendNewProblem);
    };
  }, [socket]);
  return (
    <>
      <CreateNotesContext.Provider value={newQuestionContextValue}>
        {children}
      </CreateNotesContext.Provider>
    </>
  );
};

export default CreateNotesProvider;
