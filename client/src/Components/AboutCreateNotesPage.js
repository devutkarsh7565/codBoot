import React from "react";
import Img from "../Images/CompetitiveCompanion.png";
import Image from "../Images/CreateNotesScreenShot.png";
import Tags from "../Images/TagsAndNotesScreenShot.png";

const AboutCreateNotesPage = () => {
  return (
    <div className="xl:w-[1280px] lg:w-[62rem] md:w-[47rem] sm:w-[40rem] xs:w-[30rem] w-[23rem] min-h-screen flex flex-col justify-start items-center gap-6 p-5">
      <div className="flex justify-between sm:gap-0 gap-8 p-8 items-center text-white dark:text-[#6F7684] font-NavbarLink text-2xl sm:flex-nowrap flex-wrap">
        <p className="sm:w-2/5 w-full">
          Download Competitive Companion Extension and if you already have this
          extension then click on plus button to create notes
        </p>
        <img
          className="sm:w-1/2 w-full rounded border-[2px] border-green-500"
          src={Img}
          alt="img"
        />
      </div>
      <div className="flex justify-between p-6 items-center text-white font-NavbarLink text-2xl sm:flex-nowrap flex-wrap-reverse gap-8">
        <img
          className="sm:w-1/2 w-full  border-green-500 border rounded"
          src={Image}
          alt="img"
        />
        <p className="sm:w-2/5 w-full dark:text-[#6F7684]">
          Download Competitive Companion Extension and if you already have this
          extension then click on plus button to create notes
        </p>
      </div>
      <div className="flex justify-between p-6 items-center text-white font-NavbarLink text-2xl sm:flex-nowrap flex-wrap gap-8">
        <p className="sm:w-2/5 w-full dark:text-[#6F7684]">
          Download Competitive Companion Extension and if you already have this
          extension then click on plus button to create notes
        </p>
        <img
          className="sm:w-1/2 w-full  border-green-500 border rounded"
          src={Tags}
          alt="img"
        />
      </div>
    </div>
  );
};

export default AboutCreateNotesPage;
