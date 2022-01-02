import axiosBase from "../../../axiosBase";

const LoginReducer = (state, payload) => {
  return {
    ...state,
    user: {
      ...state.user,
      userStatus: payload.responseData,
      isLoggedIn: payload.isSuccess,
    },
  };
};

export default LoginReducer;
