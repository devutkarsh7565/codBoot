import React, { createContext, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuth = () => {
  const { isAuth, setIsAuth, auth } = useContext(AuthContext);
  return <div>{(isAuth, setIsAuth, auth)}</div>;
};

export default useAuth;
