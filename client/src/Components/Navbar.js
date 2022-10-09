import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { CreateNotesContext } from "../Providers/CreateNotesProvider";
import { VscThreeBars } from "react-icons/vsc";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  const { createNotes } = useContext(CreateNotesContext);
  const [showNavbarLinks, setShowNavbarLinks] = useState(false);

  return (
    <>
      <nav className=" w-full sticky top-0 z-10  ">
        <div className="md:flex md:justify-around md:items-center w-full  bg-[#121418] lg:gap-12  dark:bg-[#efebfa] max-h-screen  md:h-24  md:border-b border-green-500 dark:border-[#5924ed]">
          <div className="flex w-full md:justify-start justify-around items-center sm:px-auto py-5 text-4xl md:w-1/5 xl:mx-10  lg:text-5xl md:text-[30px] font-medium text-white dark:text-black font-NavbarLink md:border-none border-b border-green-500 dark:border-blue-500">
            <div className="w-1/2 md:w-full flex md:flex-none justify-start ">
              <Link to="/">
                Cod
                <span className="text-[#22C55E] dark:text-blue-500 ">BOOT</span>
              </Link>
            </div>
            {/* toggle bar  */}
            <div className="flex justify-end items-center gap-3 md:hidden">
              <ThemeSwitchButton />
              {showNavbarLinks ? (
                <CgCloseR
                  className={"text-green-500".concat(
                    showNavbarLinks ? "block" : "hidden"
                  )}
                  onClick={() => setShowNavbarLinks(!showNavbarLinks)}
                />
              ) : (
                <VscThreeBars
                  className={"".concat(showNavbarLinks ? "hidden" : "block")}
                  onClick={() => setShowNavbarLinks(!showNavbarLinks)}
                />
              )}
            </div>
          </div>

          <div
            className={"w-full  h-screen ".concat(
              showNavbarLinks ? "block" : "hidden"
            )}
          >
            <div className="flex flex-col justify-center items-center gap-16 text-white dark:text-[#6F7684] py-10 text-2xl">
              <NavLink to="/">HOME</NavLink>

              <NavLink to={`createnotes/${createNotes?.name}`}>
                CREATENOTES
              </NavLink>

              <NavLink to="/notes">NOTES</NavLink>
              <NavLink to="/contest">CONTEST</NavLink>

              {isAuth ? (
                <button className="font-NavbarLink text-lg font-light dark:bg-[#efebfa] dark:text-[#5924ed] dark:border-[#5924ed] dark:hover:bg-[#5924ed] dark:hover:text-white transition-all py-2 bg-black border border-green-600 rounded-md hover:border-green-600 hover:text-green-500 hover:bg-white  px-3 mx-1  text-[#f3efef]  duration-500">
                  SIGNOUT
                </button>
              ) : (
                <NavLink
                  className="font-NavbarLink text-lg font-light dark:bg-[#efebfa] dark:text-[#5924ed] dark:border-[#5924ed] dark:hover:bg-[#5924ed] dark:hover:text-white transition-all py-2 bg-black border border-green-600 rounded-md hover:border-green-600 hover:text-green-500 hover:bg-white  px-3 mx-1  text-[#f3efef]  duration-500"
                  to="/login"
                >
                  LOG IN
                </NavLink>
              )}
            </div>
          </div>

          <div className="xl:w-1/2 lg:w-3/5 md:w-4/5 md:block hidden">
            <div className="  md:flex md:justify-evenly md:items-center  text-white dark:text-[#6F7684] font-semibold font-NavbarLink lg:text-lg md:text-md ">
              <NavLink to="/">HOME</NavLink>

              <NavLink to={`createnotes/${createNotes?.name}`}>
                CREATENOTES
              </NavLink>

              <NavLink to="/notes">NOTES</NavLink>
              <NavLink to="/contest">CONTEST</NavLink>

              {isAuth ? (
                <button className="font-NavbarLink text-lg font-light dark:bg-[#efebfa] dark:text-[#5924ed] dark:border-[#5924ed] dark:hover:bg-[#5924ed] dark:hover:text-white transition-all py-2 bg-black border border-green-600 rounded-md hover:border-green-600 hover:text-green-500 hover:bg-white  px-3 mx-1  text-[#f3efef]  duration-500">
                  SIGNOUT
                </button>
              ) : (
                <NavLink
                  className="font-NavbarLink text-lg font-light dark:bg-[#efebfa] dark:text-[#5924ed] dark:border-[#5924ed] dark:hover:bg-[#5924ed] dark:hover:text-white transition-all py-2 bg-black border border-green-600 rounded-md hover:border-green-600 hover:text-green-500 hover:bg-white  px-3 mx-1  text-[#f3efef]  duration-500"
                  to="/login"
                >
                  LOG IN
                </NavLink>
              )}
              <ThemeSwitchButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
