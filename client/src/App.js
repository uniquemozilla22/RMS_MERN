import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
};

export default App;
