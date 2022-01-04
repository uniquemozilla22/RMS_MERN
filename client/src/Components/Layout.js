import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Header from "./Header/Header";
import Loader from "./loader/loader";

const Layout = (props) => {
  const [isloaderActive, setIsLoaderActive] = useState(props.isLoaderActive);
  const [isLoginScreen, setIsLoginScreen] = useState(props.login);

  useEffect(() => {
    setIsLoaderActive(props.isLoaderActive);
  }, [props.isLoaderActive]);

  return (
    <>
      {isLoginScreen ? null : <Header />}
      {props.children}
      {isloaderActive ? <Loader /> : null}
    </>
  );
};

const mapStateToProps = (state, ownprops) => {
  const { isLoaderActive } = state;
  return { ...ownprops, isLoaderActive };
};

export default connect(mapStateToProps)(Layout);
