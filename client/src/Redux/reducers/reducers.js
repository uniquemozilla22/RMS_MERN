import { LOADER, LOGIN, REGISTER } from "../Action/Types";
import LoginReducer from "./login/LoginReducer";

const initialState = {
  user: {
    username: null,
    isLoggedIn: false,
  },
  isLoaderActive: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return LoginReducer(state, action);
    }
    case REGISTER: {
      return state;
    }
    case LOADER: {
      return { ...state, isLoaderActive: !state.isLoaderActive };
    }
    default:
      return state;
  }
};

export default reducers;
