import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_FAIL,
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

export const userLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { loading: true };
    case LOGIN_USER_SUCCESS:
      return { loading: false, userInfos: action.payload,success:true };
    case LOGIN_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userListDetailsReducers = (state = { users: [] }, action) => {
  switch (action.type) {
    case FETCH_USER_LIST_REQUEST:
      return { loading: true, users: [] };
    case FETCH_USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case FETCH_USER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case UPDATE_USER_DETAILS_RESET:
      return {};

    default:
      return state;
  }
};

export const userDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        loading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        userdeleted: action.payload,
      };
    case DELETE_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userRegisterReducers = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case REGISTER_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userDetailsReducers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        loading: false,
        userDetails: action.payload,
      };

    case FETCH_USER_DETAILS_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export const fetchUserDetailsReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case GET_USER_DETAILS_SUCCESS:
      return {
        loading: false,
        userdetails: action.payload,
        success: true,
      };

    case GET_USER_DETAILS_FAIL:
      return {
        loading: false,
      };

    default:
      return state;
  }
};

export const updateUserDetailsReducers = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_USER_DETAILS_SUCCESS:
      return {
        loading: false,
        userupdate: action.payload,
        success: true,
      };

    case UPDATE_USER_DETAILS_FAIL:
      return {
        loading: false,
      };

    default:
      return state;
  }
};
