import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoutes;
