import axiosBase from "../../../axiosBase";

const LoginReducer = (state, action) => {
  const { username, password } = action.payload;
  console.log(username, password);

  // axiosBase
  //   .post("/login", { username, password })
  //   .then((response) => {
  //     // state = {
  //     //   ...state,
  //     //   user: { username, isLoggedIn: true },
  //     //   isLoaderActive: !state.isLoaderActive,
  //     // };
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return state;
};

export default LoginReducer;
