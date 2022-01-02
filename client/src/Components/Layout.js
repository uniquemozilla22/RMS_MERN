import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Loader from "./loader/loader";

const Layout = (props) => {
  const [isloaderActive, setIsLoaderActive] = useState(props.isLoaderActive);

  useEffect(() => {
    setIsLoaderActive(props.isLoaderActive);
  }, [props.isLoaderActive]);
  return (
    <>
      {props.children}
      {isloaderActive ? <Loader /> : <></>}
    </>
  );
};
const mapStateToProps = (state, ownprops) => {
  const { isLoaderActive } = state;
  return { ...ownprops, isLoaderActive };
};

export default connect(mapStateToProps)(Layout);
