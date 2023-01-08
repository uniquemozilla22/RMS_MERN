import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import axiosBase from "./axiosBase";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

const App = () => {
  const navigation = useNavigate();
  const [token, setToken] = useState(Cookies.get("token"));

  const validToken = () => {
    if (token) {
      axiosBase.post("/validateuser", { token }).then((res) => {
        const { isValidToken } = res.data.responseData;
        if (!isValidToken) {
          navigation("/login", { res: "Expired Token" });
        } else {
          navigation("/");
        }
      });
    } else {
      navigation("/login", { res: "Expired Token" });
    }
  };

  useEffect(() => {
    validToken();
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomeScreen />}></Route>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
};

export default App;
