import React from "react";

const LoadingComponent = () => {
  return (
    <div>
      <div class="border border-slate-600 dark:bg-[#EFEBFA] dark:border-none shadow-xl rounded-md sm:p-4 p-2 md:w-[50rem] sm:w-[40rem] w-[22rem] lg:max-w-4xl h-40  animate-pulse ">
        <div class=" flex sm:justify-between justify-start items-center w-full">
          <div className="flex sm:justify-between sm:gap-8 justify-start items-center w-7/10">
            <div class=" bg-slate-700 dark:bg-[#DDDFE1] rounded-lg md:h-20 h-12 sm:h-16 sm:w-16 md:w-20 w-12 px-2 md:px-4"></div>
            <div className="flex flex-col justify-start items-start gap-3 sm:pl-6 pl-3 sm:pr-3 pr-1 py-3 h-32 md:w-[380px] w-[190px] md:mx-8 mx-2 border-l dark:border-none border-slate-700">
              <div className="w-4/5 h-8 rounded-2xl dark:bg-[#DDDFE1] bg-slate-600"></div>
              <div className="w-40 h-6 rounded-2xl dark:bg-[#DDDFE1] bg-slate-600"></div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 dark:bg-[#DDDFE1] bg-slate-700 py-3 px-5 w-1/5 md:w-1/4 rounded-xl">
            <h1 className="w-28 h-5 "></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
