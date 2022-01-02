import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";
import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";
import LoginAction from "../../Redux/Action/LoginAction";
import LoaderAction from "../../Redux/Action/LoaderAction";
import { useNavigate } from "react-router";
import ErrorModal from "../ErrorModal/ErrorModal";

const Login = (props) => {
  const [user, setUser] = useState(props.user);
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.Loader();
    props.Login(username, password);
    props.Loader();
  };

  useEffect(() => {
    setUser(props.user);
    if (props.user.isLoggedIn) {
      localStorage.setItem("logged", true);
      navigation("/");
    }
  }, [navigation, props.user]);

  return (
    <>
      {!user.isLoggedIn && user.userStatus !== null ? (
        <ErrorModal title={user.userStatus} />
      ) : null}
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
                onChange={(e) => setPassword(e.target.value)}
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                title="Minimum eight characters, at least one letter and one number"
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
    </>
  );
};

const mapStateToProps = (state, ownprops) => {
  return { ...state, ...ownprops };
};

const mapDispatchToProps = (dispatch, ownprops) => {
  return {
    Login: (username, password) =>
      dispatch(LoginAction({ username, password })),
    Loader: () => dispatch(LoaderAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
