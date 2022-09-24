const useContestButton = () => {
  const contestsName = [
    {
      buttonName: "All",
      name: "all",
    },
    {
      buttonName: "CodeForces",
      name: "codeforces",
    },
    {
      buttonName: "CodeChef",
      name: "code_chef",
    },
    {
      buttonName: "Hackerrank",
      name: "hacker_rank",
    },
    {
      buttonName: "HackerEarth",
      name: "hacker_earth",
    },
    {
      buttonName: "KickStart",
      name: "kick_start",
    },
    {
      buttonName: "LeetCode",
      name: "leet_code",
    },
  ];

  return { contestsName };
};

export default useContestButton;
