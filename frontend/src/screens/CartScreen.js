import React from "react";
import { useState } from "react";
import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { BsTrash } from "react-icons/bs";
import { removeCart } from "../actions/cartAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CartScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.cart.cartItems);
  const { cartItems } = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleChange = (id) => {
    dispatch(removeCart(id));
    console.log("first");
  };

  const placeorderhandle = () => {
    if (products.length === 0) {
      toast("your cart is empty");
    }
     else {
      navigate("/shipping");
    }
  };

  return (
    <div className="product_cart">
      <div className="product_details_sec">
        {cartItems.length < 1 ? <h1>your cart is empty</h1> : <></>}

        {products.map((items) => (
          <div className="cart_section">
            <div className="item_img_section">
              <img src={items.image} />
            </div>
            <div className="item_brand_section">
              <h2>{items.brand}</h2>
              <p>{items.name}</p>

              <hr></hr>
              <h2>$ {items.price}</h2>
              <hr></hr>
              <p className="small">Hurry, only {items.countInStock} left!</p>
            </div>
            <div className="product_itemsinstock">
              <select
                value={items.qty}
                onChange={(e) => dispatch(addToCart(items._id, e.target.value))}
              >
                {[...Array(items.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
            <div
              className="item_trash_icon"
              onClick={() => handleChange(items._id)}
            >
              <BsTrash />
            </div>
          </div>
        ))}
      </div>
      <div className="pricing_section">
        <div className="heading">
          Pricing Details
          <hr></hr>
        </div>
        <div className="main_price">
          <h4>Price ({products.length}) items </h4>
          <p>
            ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </p>
        </div>
        <div className="delivery_charge">
          <h4>Delivery Charges</h4>
          <p>FREE</p>
        </div>
        <hr></hr>
        <div className="total_price">
          <h4>Total Amount</h4>
          <p>
          ${cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </p>
        </div>
        <div className="submit_btn">
          <button onClick={placeorderhandle} className="register_btn">
            Place Order
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default CartScreen;
