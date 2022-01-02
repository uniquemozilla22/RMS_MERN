import axiosBase from "../../axiosBase";
import LoaderAction from "./LoaderAction";
import { LOGIN } from "./Types";

const LoginAction = (payload) => {
  const { username, password } = payload;

  return (dispatch) => {
    return loginToTheSyystem(username, password)
      .then((res) => {
        dispatch(loginHandler(res));
      })
      .catch((err) => {
        dispatch(loginHandler(err.response));
      });
  };
};

const loginToTheSyystem = (username, password) => {
  return axiosBase.post("/login", { username, password });
};

const loginHandler = (payload) => {
  const {
    status,
    data: { isSuccess, responseData },
    statusText,
  } = payload;

  if (isSuccess) {
    return {
      type: LOGIN,
      payload: {
        isSuccess,
        responseData: responseData.username,
      },
    };
  } else {
    return {
      type: LOGIN,
      payload: {
        isSuccess,
        responseData: statusText + " " + status + ":" + responseData,
      },
    };
  }
};
export default LoginAction;
