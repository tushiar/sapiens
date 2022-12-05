import jwt_decode from "jwt-decode";
import {
  
  AUTH_ERROR, CLEAR_ALERT,
  INVALID_LOGIN, LOGIN_FAIL,
  LOGIN_SUCCESS, THEME_UPDATED, USER_LOADED
} from "../action/types";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  theme: "blue",
  themeUpdated: null,
  alertLogin: null,
};
const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
        theme: payload.user.theme,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      const decodedData = jwt_decode(localStorage.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        theme: decodedData.user.theme,
      };
    case THEME_UPDATED:
      return {
        ...state,
        theme: payload.theme,
        themeUpdated: payload.msg,
      };
    case INVALID_LOGIN:
      return {
      ...state,
      alertLogin: payload.msg
    }
    case CLEAR_ALERT:
      return {
        ...state,
        themeUpdated: null,
        alertLogin: null,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default auth;
