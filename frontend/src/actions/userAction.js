import axios from "axios";
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  FETCH_USER_LIST_REQUEST,
  FETCH_USER_LIST_SUCCESS,
  FETCH_USER_LIST_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAIL,
  UPDATE_USER_DETAILS_REQUEST,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAIL,
  UPDATE_USER_DETAILS_RESET,
} from "../constants/userConstants";
import { useAuth } from "../auth";



export const editIndividualuser =
  (userid, name, email, isAdmin) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_USER_DETAILS_REQUEST });
      const {
        userLogin: { userInfos },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfos.token}`,
        },
      };
      const datas = {
        name,
        email,
        isAdmin,
      };
      const { data } = await axios.put(
        `http://localhost:5000/api/users/${userid}`,
        datas,
        config
      );

      dispatch({ type: UPDATE_USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: UPDATE_USER_DETAILS_FAIL, payload: error.message });
    }
  };

export const getIndividualDetailsuser =
  (userid) => async (dispatch, getState) => {
    try {
      dispatch({ type: GET_USER_DETAILS_REQUEST });
      const {
        userLogin: { userInfos },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfos.token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:5000/api/users/${userid}`,
        config
      );

      dispatch({ type: GET_USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_USER_DETAILS_FAIL, payload: error.message });
    }
  };

export const deleteIndividualuser = (userid) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });
    const {
      userLogin: { userInfos },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
    };
    const { data } = await axios.delete(
      `http://localhost:5000/api/users/${userid}`,
      config
    );
    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, payload: error.message });
  }
};

export const listAllusers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_USER_LIST_REQUEST });
    const {
      userLogin: { userInfos },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
    };
    const { data } = await axios.get(`http://localhost:5000/api/users`, config);
    dispatch({ type: FETCH_USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_USER_LIST_FAIL, payload: error.message });
  }
};

export const loginUserAction = (email, password) => async (dispatch) => {
  
  try {
    
    dispatch({ type: LOGIN_USER_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/users/login",
      { email, password },
      config
    );
    console.log(data);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
  }
};

export const registerUserAction =
  (name, email, password) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/users",
        { name, email, password },
        config
      );
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
      /*localStorage.setItem("userInfo", JSON.stringify(data));*/
    } catch (error) {
      dispatch({ type: REGISTER_USER_FAIL, payload: error.message });
    }
  };
