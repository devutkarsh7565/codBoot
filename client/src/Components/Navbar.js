import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { CreateNotesContext } from "../Providers/CreateNotesProvider";

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
  return (
    <>
      <nav className="sticky w-full top-0 z-10 md:flex justify-center  bg-black">
        <div className="flex justify-center xl:w-[75rem] lg:w-[69rem] md:w-[70rem] items-center h-24 border-b border-green-500">
          <div className="flex justify-start items-center w-1/2 mx-10 text-4xl font-light text-white">
            Code<span className="text-[#22C55E]">X</span>
          </div>
          <div className="flex justify-evenly items-center w-1/2 text-white font-light text-xl">
            <NavLink to="/">Home</NavLink>

            <NavLink to={`createnotes/${createNotes?.name}`}>
              createNotes
            </NavLink>

            <NavLink to="/notes">Notes</NavLink>
            <NavLink to="/contest">Contest</NavLink>

            {isAuth ? (
              <button
                className="font-Raleway text-sm font-semibold py-2 bg-green-700 border hover:border-green-600 hover:text-green-500  hover:bg-white  px-2 mx-1  text-[#f3efef]  duration-500"
                //   onClick={handleUserLogOut}
              >
                SignOut
              </button>
            ) : (
              <NavLink
                className="font-Raleway text-sm font-normal py-2 bg-black border border-green-600 transition-all  hover:border-green-600 hover:text-green-500 hover:bg-white  px-2 mx-1  text-[#f3efef]  duration-500"
                to="/login"
              >
                LOGIN
              </NavLink>
            )}

            {/* <Link to="/login">Login</Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
