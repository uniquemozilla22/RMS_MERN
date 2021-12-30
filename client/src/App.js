import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <HomeScreen isLoggedIn={isLoggedIn} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
};

export default App;
