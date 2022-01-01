import { LOGIN } from "./Types";

const LoginAction = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export default LoginAction;
