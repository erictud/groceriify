import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  SHOW_ALERT,
  CLEAR_ALERT,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT_USER,
} from "./actions";

const reducer = (state, action) => {
  //! ALERTS
  if (action.type === SHOW_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: action.payload.alertType,
      alertMsg: action.payload.alertMsg,
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertMsg: "",
    };
  }
  //! AUTH
  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertMsg: "Success! Logging in...",
      user: true,
      username: action.payload.username,
      email: action.payload.email,
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "error",
      alertMsg: action.payload.msg,
    };
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertMsg: "Success! Signing in...",
      user: true,
      username: action.payload.username,
      email: action.payload.email,
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "error",
      alertMsg: action.payload.msg,
    };
  }
  if (action.type === GET_CURRENT_USER_BEGIN) {
    return { ...state, isLoadingUserData: true };
  }
  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return {
      ...state,
      isLoadingUserData: false,
      user: true,
      email: action.payload.email,
      username: action.payload.username,
    };
  }
  if (action.type === LOGOUT_USER) {
    return { ...state, user: null, username: "", email: "", isLoadingUserData: false };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
