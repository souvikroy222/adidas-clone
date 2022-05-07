import React from "react";
import styles from "./PlaceOrderScreen.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../actions/orderAction";
import { useEffect } from "react";

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.cart.cartItems);
  const { cartItems } = useSelector((state) => state.cart);

  const cart = useSelector((state) => state.cart);

  const price = cart.cartItems
    .reduce((acc, item) => acc + item.price * item.qty+200, 0)
    .toFixed(2);
 

  console.log(cart.cartItems);

  const userAddress = localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : null;
  const userPaymentMethod = localStorage.getItem("paymentMethod")
    ? JSON.parse(localStorage.getItem("paymentMethod"))
    : null;

  const placeorderhandle = () => {
    dispatch(
      placeOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: userPaymentMethod,      
        taxPrice: 200,
        ShippingPrice: 0,
        totalPrice: price,
      })
    );
  };
  const {
    userLogin: { userInfos },
  } = useSelector((state)=>state);
  console.log(userInfos.token)

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      navigate(`/orders`);
    }
  }, [success]);

  return (
    <div className={styles.product_cart}>
      <div className={styles.product_details_sec}>
        <h1>Delivery Address</h1>

        <h3>
          {userAddress.address}, {userAddress.city}, {userAddress.country},{" "}
          {userAddress.postalCode}
        </h3>
        <Link to="/shipping">
          <h5>Change Address</h5>
        </Link>
        <hr></hr>
        <h1>Payment Method</h1>
        <h3>{userPaymentMethod}</h3>
        <Link to="/payment">
          <h5>Change Payment Method</h5>
        </Link>
        <hr></hr>

        {products.map((items) => (
          <div className={styles.cart_section}>
            <div className={styles.item_img_section}>
              <img src={items.image} />
            </div>
            <div className={styles.item_brand_section}>
              <h2>{items.brand}</h2>
              <p>{items.name}</p>

              <hr></hr>
              <h2>$ {items.price}</h2>
              <hr></hr>
              <p className={styles.small}>
                Hurry, only {items.countInStock} left!
              </p>
            </div>
            <div className={styles.product_itemsinstock}>
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
          </div>
        ))}
      </div>
      <div className={styles.pricing_section}>
        <div className={styles.heading}>
          Order Details
          <hr></hr>
        </div>
        <div className={styles.main_price}>
          <h4>Price ({products.length}) items </h4>
          <p>
            ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </p>
        </div>
        <div className={styles.delivery_charge}>
          <h4>Delivery Charges</h4>
          <p>FREE</p>
        </div>
        <div className={styles.delivery_charge}>
          <h4>Tax</h4>
          <p>$200</p>
        </div>
        <hr></hr>
        <div className={styles.total_price}>
          <h4>Total Amount</h4>
          <p>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price + 200, 0)
              .toFixed(2)}
          </p>
        </div>
        <div className={styles.submit_btn}>
          <button onClick={placeorderhandle} className={styles.register_btn}>
            Place
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default PlaceOrderScreen;
