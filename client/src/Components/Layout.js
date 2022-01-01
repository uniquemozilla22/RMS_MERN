import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "./loader/loader";

const Layout = (props) => {
  const loader = useSelector((state) => state.isLoaderActive);
  const [isloaderActive, setIsLoaderActive] = useState(loader);

  useEffect(() => {
    setIsLoaderActive(loader);
  }, [loader]);
  return (
    <>
      {isloaderActive ? <Loader /> : null}
      {props.children}
    </>
  );
};

export default Layout;
