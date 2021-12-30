import React from "react";
import { useSelector } from "react-redux";
import Loader from "./loader/loader";

const Layout = (props) => {
  const isloaderActive = useSelector((state) => state.isLoaderActive);
  return (
    <>
      {isloaderActive ? <Loader /> : null}
      {props.children}
    </>
  );
};

export default Layout;
