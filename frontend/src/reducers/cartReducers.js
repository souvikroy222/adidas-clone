    
    import { CART_ADD_ITEM, SAVE_PAYMENT_METHOD,CART_REMOVE_ITEM, SAVE_SHIPPING_ADD} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [],shippingAddress:{} }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((items) => items._id === item._id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (items) => items._id !== action.payload
        ),
      };
      case SAVE_SHIPPING_ADD:
        return{
          ...state,
          shippingAddress:action.payload
        }
        case SAVE_PAYMENT_METHOD:
          return{
            ...state,
            paymentMethod:action.payload
          }
    default:
      return state;
  }
};
