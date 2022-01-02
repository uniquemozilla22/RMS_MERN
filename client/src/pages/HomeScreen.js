import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const HomeScreen = (props) => {
  const navigation = useNavigate();
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logged"))
  );

  const isNotLoggedIn = () => {
    if (!loggedIn) {
      console.log(loggedIn);
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
