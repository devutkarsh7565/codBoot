import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { CreateNotesContext } from "../Providers/CreateNotesProvider";
import useDarkTheme from "../Hooks/useDarkTheme";
import { FaMoon, FaRegLightbulb } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

// import { BsThreeDotsVertical } from "react-icons/bs";
// import LogOutButton from "./LogOutButton";
// import useNewQuestion from "../Hooks/useNewQuestion";
// import UserNavigate from "../Hooks/useNavigate";
// import useAuth from "../Hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// import useLogOut from "../Hooks/useLogOut";
const Navbar = () => {
  //   const newProblem = useNewQuestion();
  // const userUpcomingNavigate = (movieId) => {
  //   UserNavigate(movieId);
  // };
  //   const navigate = useNavigate();
  //   const { auths } = useAuth();
  //   const { userLogOut } = useLogOut();
  //   const handleUserLogOut = () => {
  //     userLogOut(auths.setIsAuth);
  //   };
  //   const userNavigate = () => {
  //     if (!auths.isAuth) {
  //       navigate("/login");
  //     } else {
  //       if (newProblem.newQuestion)
  //         navigate(`/question/${newProblem.newQuestion?.name}`);
  //     }
  //   };
  const { isAuth } = useContext(AuthContext);
  const { createNotes } = useContext(CreateNotesContext);
  const { isDarkMode, switchTheme } = useDarkTheme();
  const handleChange = () => {
    switchTheme();
  };
  return (
    <>
      <nav className="sticky w-full top-0 z-10 md:flex justify-center  ">
        <div className="flex justify-center xl:w-[75rem] lg:w-[69rem] md:w-[70rem] bg-[#121418]  dark:bg-[#efebfa] items-center h-24 border-b border-green-500 dark:border-blue-500">
          <div className="flex justify-start items-center w-1/2 mx-10 text-5xl font-medium text-white dark:text-black font-NavbarLink ">
            Code
            <span className="text-[#22C55E] dark:text-[#5924ed] ">X</span>
          </div>
          <div className="flex justify-evenly items-center w-1/2 text-white dark:text-[#6F7684] font-semibold font-NavbarLink text-lg ">
            <NavLink to="/">HOME</NavLink>

            <NavLink to={`createnotes/${createNotes?.name}`}>
              CREATENOTES
            </NavLink>

            <NavLink to="/notes">NOTES</NavLink>
            <NavLink to="/contest">CONTEST</NavLink>

            {isAuth ? (
              <button
                className="font-NavbarLink text-lg font-light dark:bg-[#efebfa] dark:text-[#5924ed] dark:border-[#5924ed] dark:hover:bg-[#5924ed] dark:hover:text-white transition-all py-2 bg-[#121418] border border-green-600 rounded-md hover:border-green-600 hover:text-green-500 hover:bg-white  px-3 mx-1  text-[#f3efef]  duration-500"
                //   onClick={handleUserLogOut}
              >
                SIGNOUT
              </button>
            ) : (
              <NavLink
                className="font-NavbarLink text-lg font-light dark:bg-[#efebfa] dark:text-[#5924ed] dark:border-[#5924ed] dark:hover:bg-[#5924ed] dark:hover:text-white transition-all py-2 bg-[#121418] border border-green-600 rounded-md hover:border-green-600 hover:text-green-500 hover:bg-white  px-3 mx-1  text-[#f3efef]  duration-500"
                to="/login"
              >
                LOG IN
              </NavLink>
            )}
            <div className="relative flex items-center">
              <input
                type="checkbox"
                className={"checkbox fixed h-12 w-12 z-20 opacity-0".concat(
                  isDarkMode ? "" : " dark"
                )}
                onChange={handleChange}
              />
              <label
                className={"h-[18px] w-[34px] flex rounded-full items-center justify-between p-[3px] relative scale-150 mx-2 mr-5".concat(
                  isDarkMode ? " bg-blue-500" : " bg-black"
                )}
              >
                <FaMoon className="text-white text-sm" />
                <BsFillSunFill className="text-yellow-300 text-sm" />
                <div
                  className={"w-[16px] h-[16px] bg-white transition-transform rounded-full fixed top-[1px] left-[1px]".concat(
                    isDarkMode ? "" : " translate-x-4"
                  )}
                />
              </label>
            </div>

            {/* <Link to="/login">Login</Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
