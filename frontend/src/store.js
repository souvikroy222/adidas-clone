import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducer,
  EditProductReducer,
  productDetailsReducer,
  deleteProductReducer,
  createProductReducer,
  searchproductReducer,
  filteredproductReducer
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { WishListReducer } from "./reducers/wishListReducers";
import {
  userRegisterReducers,
  userLoginReducers,
  updateUserDetailsReducers,
  userListDetailsReducers,
  userDeleteReducers,
  fetchUserDetailsReducers,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderPayReducers,
  orderDetailsReducers,
  deliveredOrdersReducer,
  allCustomerOrdersReducer,
  allOrderDetailsReducers,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
  filteredProductDetails:filteredproductReducer,
  searchProductDetails:searchproductReducer,
  productCreate: createProductReducer,
  productUpdate: EditProductReducer,
  productDelete: deleteProductReducer,
  cart: cartReducer,
  wishlist: WishListReducer,
  userRegisterInfo: userRegisterReducers,
  userLogin: userLoginReducers,
  allorders: allCustomerOrdersReducer,
  orderDetails: orderDetailsReducers,
  orderCreate: orderCreateReducer,
  deliveredOrder:deliveredOrdersReducer,
  userOrders: allOrderDetailsReducers,
  orderPay: orderPayReducers,
  usersList: userListDetailsReducers,
  userDelete: userDeleteReducers,
  userDetail: fetchUserDetailsReducers,
  userUpdate: updateUserDetailsReducers,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const wishListItemsFromStorage = localStorage.getItem("wishListitems")
  ? JSON.parse(localStorage.getItem("wishListitems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const intialState = {
  wishlist: { wishListitems: wishListItemsFromStorage },
  userLogin: { userInfos: userLoginFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
};
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
/*const intialState = {
  wishlist: { wishListitems: wishListItemsFromStorage },
  userLogin: { userInfo: userLoginFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
};*/