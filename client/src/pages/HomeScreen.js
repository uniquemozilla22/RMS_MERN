import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Layout from "../Components/Layout";

const HomeScreen = (props) => {
  const navigation = useNavigate();
  const [loggedIn, setLoggedIn] = useState(Cookies.get("token"));

  // const isNotLoggedIn = () => {
  //   if (!loggedIn) {
  //     navigation("/login");
  //   }
  // };

  // useEffect(() => {
  //   isNotLoggedIn();
  // }, [loggedIn]);

  return (
    <Layout>
      <h1>Home Screen</h1>
    </Layout>
  );
};

export default HomeScreen;
