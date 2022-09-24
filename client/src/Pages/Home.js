import React from "react";
import LandingPageAbout from "../Components/LandingPageAbout";
import LandingPageBanner from "../Components/LandingPageBanner";

// import LandingPageNotesAndContestInfo from "../Components/LandingPageNotesAndContestInfo";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen ">
        {" "}
        <LandingPageBanner />
        <LandingPageAbout />
      </div>
    </div>
  );
};

export default Home;
