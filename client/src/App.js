import React from "react";
import IndividualNoteDetail from "./Components/IndividualNoteDetail";
import Contest from "./Pages/Contest";
import CreateNote from "./Pages/CreateNote";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Notes from "./Pages/Notes";
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "./Components/LayoutWrapper";
import ProtectedRoutes from "./Components/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/createnotes/:question"
            element={<ProtectedRoutes Component={CreateNote} />}
          />
          {/* <Route path="/questions" element={<Questions />} /> */}
          <Route path="/notes" element={<ProtectedRoutes Component={Notes} />}>
            <Route path=":question" element={<IndividualNoteDetail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/contest" element={<Contest />}>
            <Route path=":contest" element={<IndividualNoteDetail />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
