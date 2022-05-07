import axios from "axios";
import { CART_ADD_ITEM,CART_REMOVE_ITEM,SAVE_PAYMENT_METHOD,SAVE_SHIPPING_ADD } from "../constants/cartConstants";

export const addToCart = (id, qty=1) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      ...data,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeCart=(id)=>async(dispatch,getState)=>{
  dispatch({
    type:CART_REMOVE_ITEM,
    payload:id    
  })
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}


export const saveShippingAddress=(data)=>(dispatch)=>{
  dispatch({
    type:SAVE_SHIPPING_ADD,
    payload:data
  })
  localStorage.setItem('shippingAddress',JSON.stringify(data))
}


export const PaymentMethod=(data)=>(dispatch)=>{
  dispatch({
    type:SAVE_PAYMENT_METHOD,
    payload:data
  })
  localStorage.setItem('paymentMethod',JSON.stringify(data))
}



