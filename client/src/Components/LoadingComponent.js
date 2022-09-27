import React from "react";

const LoadingComponent = () => {
  return (
    <div>
      <div class="border border-slate-600 dark:bg-[#EFEBFA] dark:border-none shadow-xl rounded-md p-4 w-[840px] h-40  animate-pulse ">
        <div class=" flex justify-between items-center ">
          <div className="flex justify-between items-center">
            <div class=" bg-slate-700 dark:bg-[#DDDFE1] rounded-lg h-20 w-20 px-4"></div>
            <div className="flex flex-col justify-start items-start gap-3 pl-6 pr-3 py-3 h-32 w-[480px] mx-8 border-l dark:border-none border-slate-700">
              <div className="w-4/5 h-8 rounded-2xl dark:bg-[#DDDFE1] bg-slate-600"></div>
              <div className="w-40 h-6 rounded-2xl dark:bg-[#DDDFE1] bg-slate-600"></div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 dark:bg-[#DDDFE1] bg-slate-700 py-3 px-5 rounded-xl">
            <h1 className="w-28 h-5 "></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
