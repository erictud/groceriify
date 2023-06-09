import React, { useContext, useEffect, useReducer } from "react";
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
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT_USER,
  CREATE_LIST_BEGIN,
  CREATE_LIST_ERROR,
  CREATE_LIST_SUCCESS,
} from "./actions";

const initialState = {
  isLoading: false,
  isLoadingUserData: true,
  loadingMsg: "",
  showAlert: "",
  alertType: "",
  alertMsg: "",
  user: null,
  username: "",
  email: "",
  activeLists: [
    {
      id: "1",
      title: "Family List",
      numOfItems: 24,
      numOfMembers: 4,
    },
    {
      id: "2",
      title: "Friends List",
      numOfItems: 12,
      numOfMembers: 3,
    },
    {
      id: "3",
      title: "School List",
      numOfItems: 7,
      numOfMembers: 5,
    },
  ],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchReq = axios.create({
    baseURL: "/api/v1",
  });

  fetchReq.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      if (err.response.status === 401) {
        logOut();
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
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user });
    } catch (err) {
      dispatch({ type: LOGIN_USER_ERROR, payload: { msg: err.response.data.msg } });
    }
    clearAlert();
  };

  const signUp = async (email, password, username) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await fetchReq.post("/auth/register", { email, password, username });
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (err) {
      dispatch({ type: REGISTER_USER_ERROR, payload: { msg: err.response.data.msg } });
    }
    clearAlert();
  };

  const logOut = async () => {
    await fetchReq("/auth/logout");
    dispatch({ type: LOGOUT_USER });
  };

  const getCurrentUserData = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await fetchReq("/auth/getUserData");
      console.log(data);
      dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: data.user });
    } catch (err) {
      if (err.response.status === 401) return;
    }
  };

  useEffect(() => {
    getCurrentUserData();
    // eslint-disable-next-line
  }, []);

  //! create list

  const createList = async ({ title, password, shopsList }) => {
    dispatch({ type: CREATE_LIST_BEGIN });
    try {
      console.log(title, password, shopsList);
      dispatch({ type: CREATE_LIST_SUCCESS });
    } catch (err) {
      dispatch({ type: CREATE_LIST_ERROR, payload: { msg: err.response.data.msg } });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider value={{ ...state, logIn, signUp, displayAlert, logOut, createList }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };
