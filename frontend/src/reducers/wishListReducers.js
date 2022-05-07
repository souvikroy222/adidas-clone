import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,REMOVE_FROM_STATE
} from "../constants/wishlistCons";

export const WishListReducer = (state = { wishListitems:[] }, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const product = action.payload;
      const existItem = state.wishListitems.find((x) => x._id === product._id);
      if (existItem) {
        return {
          ...state,
          wishListitems: state.wishListitems.map((items) =>
            items._id === existItem._id ? product : items
          ),
        };
      } else {
        return {
          ...state,
          wishListitems: [...state.wishListitems, product],
        };
      }
      case REMOVE_FROM_WISHLIST:
        return{
          ...state,
          wishListitems:state.wishListitems.filter((x)=>x._id!==action.payload)
        }

      case REMOVE_FROM_STATE:
        return{
          ...state,
          wishListitems:state.wishListitems.filter((x)=>x._id!==action.payload)
        }



        default:
          return state
  }
};
