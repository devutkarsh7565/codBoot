import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";
import CreateNotesProvider from "./Providers/CreateNotesProvider";
import FirestoreProvider from "./Providers/FirestoreProvider";
import ContestProvider from "./Providers/ContestProvider";
import { SkeletonTheme } from "react-loading-skeleton";
import DarkThemeProvider from "./Providers/DarkThemeProvider";

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
              <SkeletonTheme baseColor="#313131" highlightColor="#525252">
                {" "}
                <DarkThemeProvider>
                  <App />
                </DarkThemeProvider>
              </SkeletonTheme>
            </ContestProvider>
          </FirestoreProvider>
        </CreateNotesProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
