import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const { Component, compRoute } = props;
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    } else {
      navigate(`/${compRoute}`);
    }
    console.log("hello");
  }, [isAuth]);
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoutes;
