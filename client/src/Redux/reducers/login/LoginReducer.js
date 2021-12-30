import axiosBase from "../../../axiosBase";

const LoginReducer = (state, action) => {
  const { username, password } = action.payload;

  axiosBase
    .post("/login", { username, password })
    .then((response) => {
      //   state = { ...state, user: { username, isLoggedIn: true } };
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    ...state,
    user: {
      username,
      password,
      isLoggedIn: true,
    },
  };
};

export default LoginReducer;
