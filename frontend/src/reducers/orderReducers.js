import {
  PLACE_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  PLACE_ORDER_REQUEST,
  ALL_ORDER_DETAILS_REQUEST,
  ALL_ORDER_DETAILS_SUCCESS,
  ALL_ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  PLACE_ORDER_SUCCESS,
  ADMIN_ORDER_DETAILS_REQUEST,
  ADMIN_ORDER_DETAILS_SUCCESS,
  ADMIN_ORDER_DETAILS_FAIL,
  DELIVERED_ORDER_REQUEST,
  DELIVERED_ORDER_SUCCESS,
  DELIVERED_ORDER_FAIL,
} from "../constants/orderConstants";

export const deliveredOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case DELIVERED_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELIVERED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case DELIVERED_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const allCustomerOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
        success: true,
      };
    case ADMIN_ORDER_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
        success: true,
      };
    case PLACE_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const allOrderDetailsReducers = (state = {}, action) => {
  switch (action.type) {
    case ALL_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        allorders: action.payload,
      };
    case ALL_ORDER_DETAILS_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDetailsReducers = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case ORDER_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

//ORDER_PAY_REQUEST,ORDER_PAY_SUCCESS,ORDER_PAY_FAIL,ORDER_PAY_RESET,
export const orderPayReducers = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case ORDER_PAY_FAIL:
      return {
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};
