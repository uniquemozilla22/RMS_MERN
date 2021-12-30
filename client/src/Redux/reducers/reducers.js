import { LOGIN, REGISTER } from "../Action/Types";
import LoginReducer from "./login/LoginReducer";

const initialState = {
  user: {
    username: null,
    isLoggedIn: false,
  },
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return LoginReducer(state, action);
    }
    case REGISTER: {
      return state;
    }
    default:
      return state;
  }
};

export default reducers;
