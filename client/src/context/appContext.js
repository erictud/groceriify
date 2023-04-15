import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";

import {
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  SHOW_ALERT,
} from "./actions";

const initialState = {
  isLoading: false,
  isLoadingUserData: false,
  loadingMsg: "",
  showAlert: "",
  alertType: "",
  alertMsg: "",
  user: null,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchReq = axios.create({
    baseURL: "/api/v1",
  });

  fetchReq.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response.status === 401) {
        // logout
      }
      return Promise.reject(err);
    }
  );

  //! ALERTS
  const displayAlert = (alertType, alertMsg) => {
    dispatch({ type: SHOW_ALERT, payload: { alertMsg, alertType } });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 1500);
  };
  //! AUTH
  const logIn = async (email, password) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await fetchReq.post("/auth/login", { email, password });
      console.log(data);
      dispatch({ type: LOGIN_USER_SUCCESS });
    } catch (err) {
      dispatch({ type: LOGIN_USER_ERROR, payload: { msg: err.response.data.msg } });
    }
    clearAlert();
  };

  const signUp = async (email, password, username) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await fetchReq.post("/auth/register", { email, password, username });
      console.log(data);
      dispatch({ type: REGISTER_USER_SUCCESS });
    } catch (err) {
      dispatch({ type: REGISTER_USER_ERROR, payload: { msg: err.response.data.msg } });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider value={{ ...state, logIn, signUp, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };
