import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

const App = () => {
  // const { isLoggedIn } = useSelector((state) => state.user);
  const isLoggedIn = false;
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, [isLoggedIn]);
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

export default App;
