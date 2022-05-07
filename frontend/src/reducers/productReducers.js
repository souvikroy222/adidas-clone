import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
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
SEARCH_PRODUCT_REQUEST,
SEARCH_PRODUCT_SUCCESS,
SEARCH_PRODUCT_FAIL,
} from "../constants/productConstants";

export const searchproductReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT_REQUEST:
      return { loading: true, product: [] };
    case SEARCH_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload,success:true };
    case SEARCH_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};










export const filteredproductReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case FILTER_PRODUCT_REQUEST:
      return { loading: true, product: [] };
    case FILTER_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload,success:true };
    case FILTER_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};





export const EditProductReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_REQUEST:
      return { loading: true, products: [] };
    case UPDATE_PRODUCT_SUCCESS:
      return { loading: false };
    case UPDATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createProductReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return { loading: true, products: [] };
    case CREATE_PRODUCT_SUCCESS:
      return { loading: false };
    case CREATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return { loading: true, products: [] };
    case DELETE_PRODUCT_SUCCESS:
      return { loading: false };
    case DELETE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, product: [] };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
