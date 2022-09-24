import React from "react";
import { Outlet } from "react-router-dom";
// import FirestoreProvider from "../Provider/FirestoreProvider";
import Navbar from "./Navbar";
const LayoutWrapper = () => {
  return (
    <div>
      <div className="flex justify-center w-full bg-[#121418]  min-h-screen">
        <div className="flex flex-col max-w-7xl h-full items-center justify-start ">
          {/* <FirestoreProvider> */}
          <Navbar />
          <Outlet />
          {/* </FirestoreProvider> */}
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
