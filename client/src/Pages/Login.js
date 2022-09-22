import React from "react";
import { useContext } from "react";
import { auth, provider } from "../Hooks/firebase";
import { signInWithPopup } from "firebase/auth";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("Auth", true);
      setIsAuth(true);
      console.log("user login successfully");
    });
  };
  return (
    <>
      <div className="flex justify-between w-[182px] h-[42px] border-[#4285f4] border  mb-8">
        <div className=" mt-[1px] ml-[1px] w-[40px] h-[40px]  border-[#4285f4] border-b border-r bg-[#fff]">
          <img
            className=" mt-3 ml-3 w-[18px] h-[18px]"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="img"
          />
        </div>
        <p className="w-[141px] font-normal text-sm flex items-center pl-2 text-white cursor-pointer bg-[#4285f4] hover:text-[#4285f4] hover:bg-[white] ">
          <b onClick={signUpWithGoogle}>Sign in with google</b>
        </p>
      </div>
    </>
  );
};

export default Login;
