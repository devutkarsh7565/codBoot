import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";
import CreateNotesProvider from "./Providers/CreateNotesProvider";
import FirestoreProvider from "./Providers/FirestoreProvider";
import ContestProvider from "./Providers/ContestProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CreateNotesProvider>
          {" "}
          <FirestoreProvider>
            {" "}
            <ContestProvider>
              {" "}
              <App />
            </ContestProvider>
          </FirestoreProvider>
        </CreateNotesProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
