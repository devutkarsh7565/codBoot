import React from "react";
import LandingPageBanner from "../Components/LandingPageBanner";

// import LandingPageNotesAndContestInfo from "../Components/LandingPageNotesAndContestInfo";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen ">
        {" "}
        <LandingPageBanner />
        {/* <LandingPageNotesAndContestInfo /> */}
      </div>
    </div>
  );
};

export default Home;
