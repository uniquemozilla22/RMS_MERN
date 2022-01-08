import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";
import { connect } from "react-redux";
import LoginAction from "../../Redux/Action/LoginAction";
import LoaderAction from "../../Redux/Action/LoaderAction";
import { useNavigate } from "react-router";
import ErrorModal from "../ErrorModal/ErrorModal";
import Cookies from "js-cookie";
import { Alert } from "react-bootstrap";

const Login = (props) => {
  const [user, setUser] = useState(props.user);
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    props.Loader();
    props.Login(username, password);
    props.Loader();
  };

  useEffect(() => {
    setUser(props.user);
    if (props.user.isLoggedIn) {
      Cookies.set("token", props.user.userStatus, { expires: 1 });
      navigation("/");
    }
    if (!user.isLoggedIn && user.userStatus !== null) {
      setShowModal(true);
    }
  }, [navigation, props.user, user.isLoggedIn, user.userStatus]);

  return (
    <>
      <ErrorModal
        title={user.userStatus || " "}
        show={showModal}
        setShowModal={setShowModal}
      />
      <div className={classes.login__section + " container"}>
        <div
          className={
            classes.login__card__container + " col-md-4 col-lg-4 col-sm-12"
          }
        >
          {!user.isLoggedIn && user.userStatus !== null ? (
            <Alert variant={"danger"}>{user.userStatus}</Alert>
          ) : null}
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
