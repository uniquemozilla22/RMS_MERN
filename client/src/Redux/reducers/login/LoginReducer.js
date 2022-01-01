import axiosBase from "../../../axiosBase";

const LoginReducer = (state, action) => {
  const { username, password } = action.payload;
  let initalState = state;

  axiosBase
    .post("/login", { username, password })
    .then((response) => {
      const { isSuccess, responseData } = response.data;
      return {
        ...initalState,
        user: {
          username: responseData.username,
          isLoggedIn: isSuccess,
          errorMessage: null,
        },
      };
    })
    .catch((error) => {
      const { status, data, statusText } = error.response;
      if (status === 401) {
        return {
          ...initalState,
          user: {
            ...initalState.user,
            username: null,
            isLoggedIn: data.isSuccess,
            errorMessage: statusText + " : " + data.responseData,
          },
        };
      }
    });
};

export default LoginReducer;
