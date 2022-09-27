import React from "react";
import { Outlet } from "react-router-dom";
// import FirestoreProvider from "../Provider/FirestoreProvider";
import Navbar from "./Navbar";
const LayoutWrapper = () => {
  return (
    <div>
      <div className="flex justify-center w-full bg-[#121418] dark:bg-[#efebfa] min-h-screen">
        <div className="flex flex-col xl:w-[1280px] lg:w-[62rem] md:w-[47rem] sm:w-[40rem] w-[30rem] h-full items-center justify-start ">
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
