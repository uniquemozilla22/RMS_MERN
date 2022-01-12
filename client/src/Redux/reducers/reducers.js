import { LOADER, LOGIN, REGISTER, LOGOUT } from "../Action/Types";
import LoginReducer from "./login/LoginReducer";

const initialState = {
  user: {
    userStatus: null,
    isLoggedIn: false,
  },
  isLoaderActive: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      state = { ...LoginReducer(state, action.payload) };
      return state;
    }
    case REGISTER: {
      return state;
    }
    case LOADER: {
      state.isLoaderActive = !state.isLoaderActive;
      return state;
    }
    case LOGOUT: {
      state.user = {
        userStatus: null,
        isLoggedIn: false,
      };
      return state;
    }
    default:
      return state;
  }
};

export default reducers;
