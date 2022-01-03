import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const HomeScreen = (props) => {
  const navigation = useNavigate();
  const [loggedIn, setLoggedIn] = useState(Cookies.get("token"));

  const isNotLoggedIn = () => {
    if (!loggedIn) {
      navigation("/login");
    }
  };

  useEffect(() => {
    isNotLoggedIn();
  }, [loggedIn]);

  return (
    <div>
      <h1>Home Screen</h1>
    </div>
  );
};

export default HomeScreen;
