import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,REMOVE_FROM_STATE
} from "../constants/wishlistCons";
import axios from "axios";
export const addToWishList = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({ type: ADD_TO_WISHLIST, payload: { ...data } });
  localStorage.setItem(
    "wishListitems",
    JSON.stringify(getState().wishlist.wishListitems)
  );
};

export const removeFromWishList = (id) => async (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_WISHLIST, payload: id });
  localStorage.setItem(
    "wishListitems",
    JSON.stringify(getState().wishlist.wishListitems)
  );
};

export const removeFromState=(id)=>async(dispatch,getState)=>{
    dispatch({type:REMOVE_FROM_STATE,payload:id})
    localStorage.setItem(
        "wishListitems",
        JSON.stringify(getState().wishlist.wishListitems)
      );
}
