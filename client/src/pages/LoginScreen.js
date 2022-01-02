import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Layout from "../Components/Layout";
import Login from "../Components/Login/Login";

const LoginScreen = () => {
  const navigation = useNavigate();
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logged"))
  );

  const isNotLoggedIn = () => {
    if (loggedIn) {
      navigation("/");
    }
  };

  useEffect(() => {
    isNotLoggedIn();
  }, [loggedIn]);

  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default LoginScreen;
