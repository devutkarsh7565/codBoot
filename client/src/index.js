import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";
import CreateNotesProvider from "./Providers/CreateNotesProvider";
import FirestoreProvider from "./Providers/FirestoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CreateNotesProvider>
          {" "}
          <FirestoreProvider>
            {" "}
            <App />
          </FirestoreProvider>
        </CreateNotesProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
