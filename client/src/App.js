import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(props.isLoggedIn);

  useEffect(() => {
    setLoggedIn(props.isLoggedIn);
  }, [props.isLoggedIn]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={loggedIn ? <HomeScreen /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { ...ownProps, isLooggedIn: state.user.isLoggedIn };
};

export default connect(mapStateToProps)(App);
