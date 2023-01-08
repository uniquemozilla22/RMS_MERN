import axiosBase from "../../axiosBase";
import LoaderAction from "./LoaderAction";
import { LOGIN } from "./Types";

const LoginAction = (payload) => {
  console.log(payload);
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
  try {
    return axiosBase.post("/login", { username, password });
  } catch (err) {
    console.log({ ...err });
  }
};

const loginHandler = (payload) => {
  try {
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
          responseData: responseData.token,
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
  } catch (e) {
    console.log(e);
    return {
      type: LOGIN,
      payload: {
        isSuccess: false,
        responseData: "Not Found 404 : Internet Connection Error",
      },
    };
  }
};
export default LoginAction;
