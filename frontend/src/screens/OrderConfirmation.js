import React, { useState } from "react";
import styles from "./PlaceOrderScreen.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOrderDetails } from "../actions/orderAction";
import { useEffect } from "react";
import { payOrder } from "../actions/orderAction";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { ORDER_PAY_RESET } from "../constants/orderConstants";



const OrderConfirmation = () => {
  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();

  const orderPay = useSelector((state) => state.orderPay);
  const { success: successPay, loading: loadingPay } = orderPay;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { orders, loading } = orderDetails;

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(
        "http://localhost:5000/api/config/paypal"
      );
      const script = document.createElement("script");
      script.type = "text/javscript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!orders || successPay) {
      dispatch({type:ORDER_PAY_RESET})      
    } else if (!orders.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
    dispatch(fetchOrderDetails(id));
  }, [dispatch, successPay, orders]);

const successPaymentHandler=(paymentResult)=>{
console.log(paymentResult)
dispatch(payOrder(id,paymentResult))
}



  if (orders) {
    return (
      <div className={styles.product_cart}>
        <div className={styles.product_details_sec}>
          <h1>Order Details</h1>
          <h3>Delivery Address</h3>

          <h3>{orders.shippingAddress.city}</h3>

          <hr></hr>
          <h3>Payment Method</h3>
          <div>{orders.isPaid===false ? <PayPalButton amount={orders.totalPrice} onSuccess={successPaymentHandler}/> : <h2 style={{color:'green'}}>Paid by Paypal</h2>}</div>
          

          <hr></hr>

          {orders &&
            orders.orderItems.map((items) => (
              <div className={styles.cart_section}>
                <div className={styles.item_img_section}>
                  <img src={items.image} />
                </div>
                <div className={styles.item_brand_section}>
                  <h2>{items.brand}</h2>
                  <p>{items.name}</p>

                  <hr></hr>
                  <h3>
                    $ {items.price} x {items.qty} items
                  </h3>
                  <hr></hr>
                 
                </div>
                <div className={styles.product_itemsinstock}></div>
              </div>
            ))}
        </div>
        <div className={styles.pricing_section}>
          <div className={styles.heading}>
            Pricing Details
            <hr></hr>
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
            <p>${orders.totalPrice}</p>
          </div>
          <hr></hr>
          
   
          
        </div>
      </div>
    );
  }
};

export default OrderConfirmation;
