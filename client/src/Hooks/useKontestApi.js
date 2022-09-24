import React from "react";
import axios from "axios";
// import useContest from "./useContest";

const kontest_api_endpoint = "https://www.kontests.net/";

const getAllRunningAndUpcomingContest = async (platformName) => {
  try {
    const response = await axios.get(
      `${kontest_api_endpoint}api/v1/${platformName}`
    );
    if (response.status === 200) {
      if (response.data) {
        return response.data.map((contest) => {
          return {
            name: contest.name,
            url: contest.url,
            startTime: contest.start_time,
            endTime: contest.end_time,
            duration: contest.duration,
            site: contest.site,
            status: contest.status,
          };
        });
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in getting all upcoming and running contest :", err);
    return null;
  }
};

const useKontestApi = () => {
  return { getAllRunningAndUpcomingContest };
};

export default useKontestApi;
