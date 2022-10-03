import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../Hooks/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { setIsAuth, isAuth } = useContext(AuthContext);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("Auth", true);
      setIsAuth(true);
      console.log("user login successfully");
      navigate("/");
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .then((result) => {
        localStorage.setItem("Auth", true);
        setIsAuth(true);
        console.log("user login successfully");
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="h-screen w-full  flex flex-col justify-center items-center xs:py-6 py-3 sm:py-12 ">
        <div className="py-3 md:w-1/2 sm:w-96 w-80 sm:mx-auto text-center bg-[#232429] dark:bg-[#D2DAFF]  text-white h-[550px] border-[1px] border-green-500 dark:border-none drop-shadow-xl rounded-lg">
          <div className="flex flex-col justify-start py-8 gap-6 items-center w-full">
            <h1 className="text-white dark:text-[#6F7684] sm:text-2xl text-xl">
              REGISTER YOUR ACCOUNT
            </h1>
            <div className="flex flex-col justify-start items-start gap-[6px] pt-4 pb-2 w-4/5 dark:text-[#6F7684]">
              <label className="" htmlFor="">
                E-Mail
              </label>
              <input
                className="py-3 px-3 bg-[#232429] dark:bg-[#F3F5F9] dark:text-[#6F7684] outline-none border border-[#838383] text-[#787878] rounded-lg w-full"
                placeholder="Enter your e-mail"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-[6px] dark:text-[#6F7684] w-4/5">
              <label className="" htmlFor="">
                Password
              </label>
              <input
                className="py-3 px-3 bg-[#232429] outline-none border dark:bg-[#F3F5F9] dark:text-[#6F7684] border-[#838383] dark:border-[#6F7684] text-[#787878] rounded-lg w-full"
                placeholder="Enter your Password"
                type="password"
              />
            </div>
            <div className="flex justify-center items-center p-3 w-4/5 bg-green-500 dark:bg-blue-500 my-3 rounded-lg text-lg ">
              <button onClick={handleRegister}>Register now</button>
            </div>
            <div className="flex justify-between w-[182px] h-[42px] dark:border-blue-500 border-green-500 border rounded-md mb-8">
              <div className=" mt-[1px] ml-[1px] w-[40px] h-[40px] dark:border-blue-500  border-green-500 border-b border-r bg-[#fff]">
                <img
                  className=" mt-3 ml-3 w-[18px] h-[18px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </div>
              <div className="w-[141px] font-normal text-sm flex items-center pl-2 text-white cursor-pointer dark:bg-blue-500 bg-green-500  dark:hover:bg-white hover:bg-white hover:text-green-500 transition-all ">
                <button
                  className="hover:text-green-500 dark:hover:text-blue-500"
                  onClick={signUpWithGoogle}
                >
                  Sign in with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
