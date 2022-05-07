import React from "react";
import "./WishListScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { addToCart } from "../actions/cartAction";
import { removeFromWishList } from "../actions/wishListAction";
import { removeFromState } from "../actions/wishListAction";

const WishListScreen = () => {
  const { wishListitems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleChange = (id) => {
    dispatch(addToCart(id));
    navigate("/cart");
    /*const wishlistItem=JSON.parse(localStorage.getItem('wishListitems'))
    const removedproduct=wishlistItem.filter((item)=>item._id!==id)
    localStorage.setItem('wishListitems',removedproduct)*/
    dispatch(removeFromState(id))

    
  };

  const handledelete = (id) => {
    dispatch(removeFromWishList(id));
  };

  return (
    <div className="products_grids">
      {wishListitems.length<1?<h1>your wishlist is empty</h1>:<></>}
      {wishListitems.map((items) => (
        <div className="product_carousels" key={items._id}>
          <div className="product">
            
              {" "}
              <div className="product_image">
                <img src={items.image} />
              </div>
              <div className="product_brand">
                <h3>{items.name.split(" ")[0]}</h3>
              </div>
           
            <div className="product_name">
              <h5>{items.name}</h5>
            </div>
            <div className="product_price">
              <h4>${items.price}</h4>
            </div>
            <div className="wishlistbtns">
              <div
                onClick={() => handleChange(items._id)}
                className="movetoCartBtn"
              >
                Move to Cart
              </div>
              <div
                onClick={() => handledelete(items._id)}
                className="removetoWishListBtn"
              >
                <BsTrash />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishListScreen;
