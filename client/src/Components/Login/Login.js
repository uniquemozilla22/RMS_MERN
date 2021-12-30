import React, { useState } from "react";
import classes from "./Login.module.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../loader/loader";
import { LOADER, LOGIN } from "../../Redux/Action/Types";

const Login = () => {
  const state = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(LOADER);
    dispatch({
      type: LOGIN,
      payload: { username: username.trim(), password: password.trim() },
    });
  };

  return (
    <div className={classes.login__section + " container"}>
      <div
        className={
          classes.login__card__container + " col-md-4 col-lg-4 col-sm-12"
        }
      >
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.vaLue)}
              required
            />
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn w-100">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
