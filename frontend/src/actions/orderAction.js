import {
  PLACE_ORDER_FAIL,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ADMIN_ORDER_DETAILS_REQUEST,
  ADMIN_ORDER_DETAILS_SUCCESS,
  ADMIN_ORDER_DETAILS_FAIL,
  ORDER_DETAILS_FAIL,
  ALL_ORDER_DETAILS_REQUEST,
  ALL_ORDER_DETAILS_SUCCESS,
  ALL_ORDER_DETAILS_FAIL,
  DELIVERED_ORDER_REQUEST,
  DELIVERED_ORDER_SUCCESS,
  DELIVERED_ORDER_FAIL,
 
} from "../constants/orderConstants";
import axios from "axios";



export const updateDeliveredOrdersbyAdmin =
  (id, isDelivered = false) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: DELIVERED_ORDER_REQUEST });
      const {
        userLogin: { userInfos },
      } = getState();
      let result = {
        isDelivered,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfos.token}`,
        },
      };
      const { data } = await axios.put(
        `http://localhost:5000/api/orders/allorders/${id}`,
        result,
        config
      );
      dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELIVERED_ORDER_FAIL, payload: error.message });
    }
  };

export const fetchAllOrdersbyAdmin = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_ORDER_DETAILS_REQUEST });
    const {
      userLogin: { userInfos },
    } = getState();


    const config = {
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
    };
    
    const { data } = await axios.get(
      `http://localhost:5000/api/orders/customerorders`,
      config
    );
    dispatch({ type: ADMIN_ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADMIN_ORDER_DETAILS_FAIL, payload: error.message });
  }
};

export const fetchAllOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ALL_ORDER_DETAILS_REQUEST });
    const {
      userLogin: { userInfos },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/api/orders/`,
      config
    );
    dispatch({ type: ALL_ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_ORDER_DETAILS_FAIL, payload: error.message });
  }
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_PAY_REQUEST });
      const {
        userLogin: { userInfos },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfos.token}`,
        },
      };
      const { data } = await axios.put(
        `http://localhost:5000/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );
      dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ORDER_PAY_FAIL, payload: error.message });
    }
  };

export const fetchOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const {
      userLogin: { userInfos },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfos.token}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/api/orders/${id}`,
      config
    );
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message });
  }
};

export const placeOrder = (orderData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLACE_ORDER_REQUEST,
    });

    const {
      userLogin: { userInfos },
    } = getState();
    console.log(userInfos.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfos.token}`,
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/orders",
      orderData,
      config
    );
    dispatch({
      type: PLACE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLACE_ORDER_FAIL,
      payload: error.message,
    });
  }
};
