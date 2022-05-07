import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  FILTER_PRODUCT_REQUEST,
  FILTER_PRODUCT_SUCCESS,
  FILTER_PRODUCT_FAIL,
  SEARCH_PRODUCT_SUCCESS,
SEARCH_PRODUCT_REQUEST,
SEARCH_PRODUCT_FAIL,
} from "../constants/productConstants";
import axios from "axios";


export const searchProducts = (name) => async (dispatch, getState) => {
  try {
    dispatch({ type: SEARCH_PRODUCT_REQUEST });
   
    const { data } = await axios.get(
      `http://localhost:5000/api/products/search?name=${name}`,      
    );
    dispatch({ type: SEARCH_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_PRODUCT_FAIL, payload: error.message });
  }
};

export const filterOrders = (categories) => async (dispatch, getState) => {
  try {
    dispatch({ type: FILTER_PRODUCT_REQUEST });
   
    const { data } = await axios.get(
      `http://localhost:5000/api/products/filter?categories=${categories}`,      
    );
    dispatch({ type: FILTER_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FILTER_PRODUCT_FAIL, payload: error.message });
  }
};

export const updateIndividualProduct =
  (productInfo,productid) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_PRODUCT_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      
      const { data } = await axios.put(
        `http://localhost:5000/api/products/${productid}`,
        productInfo,
        config
      );

      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: UPDATE_PRODUCT_FAIL, payload: error.message });
    }
  };


export const createIndividualProduct =
  (productdata) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_PRODUCT_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type":"application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `http://localhost:5000/api/products`,productdata,
        config,
      );
      dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CREATE_PRODUCT_FAIL, payload: error.message });
    }
  };

export const deleteIndividualProduct =
  (productid) => async (dispatch, getState) => {
    try {
      dispatch({ type: DELETE_PRODUCT_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.delete(
        `http://localhost:5000/api/products/${productid}`,
        config
      );
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_PRODUCT_FAIL, payload: error.message });
    }
  };

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:5000/api/products");
    console.log(data);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};
