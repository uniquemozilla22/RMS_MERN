import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Layout from "../Components/Layout";
import Login from "../Components/Login/Login";
import axiosBase from "../axiosBase";

const LoginScreen = (props) => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default LoginScreen;
