import React from "react";
import classes from "./loader.module.css";
import { Spinner } from "react-bootstrap";

const Loader = (props) => {
  return <Spinner animation="grow" variant="light" />;
};

export default Loader;
