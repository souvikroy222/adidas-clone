const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

//@description place an order from frontend
//@route POST /api/orders
//@access private only for custoemrs
const saveOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    
    taxPrice,
    ShippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Order Items");
    return;
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      
      taxPrice,
      ShippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

//@description place an order from frontend
//@route GET /api/orders/:id
//@access private only for custoemrs
const getOrderDetails = asyncHandler(async (req, res) => {
  const orderId = req.params.id;

  const data = await Order.findById(orderId);

  if (!data) {
    res.status(400);
    throw new Error("not found any information by the user");
  } else {
    res.status(201).json(data);
  }
});

//@description get orders by individual user
//@route GET /api/orders
//@access private only for custoemrs
const getIndividualOrderDetails = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const data = await Order.find({ user: userId }).sort("-createdAt");
  if (!data) {
    res.status(400);
    throw new Error("not found any information by the user");
  } else {
    res.status(201).json(data);
  }
});

//@description update paid endpoint
//@route GET /api/orders/:id
//@access private only for custoemrs
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const orderId = req.params.id;
  console.log(orderId);

  const data = await Order.findById(orderId);
  if (data) {
    data.isPaid = true;
    data.paidAt = Date.now();
    data.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await data.save();
    res.json(updatedOrder);
  } else {
    throw new Error("order not found");
  }
});

//@description get all orders of customers
//@route GET /api/orders/
//@access private ADMINS
const getAllOrderDetails = asyncHandler(async (req, res) => {  
  const data = await Order.find({});
  if (!data) {
    res.status(400);
    throw new Error("not found any orders");
  } else {
    res.status(201).json(data);
  }
});

//@description update delivered endpoint
//@route GET /api/orders/:id
//@access private ADMINS
const updateDeliveredOrder = asyncHandler(async (req, res) => {
  const EsistingOrder = await Order.findById(req.params.id);
  if (EsistingOrder) {
    EsistingOrder.isDelivered = req.body.isDelivered;
    EsistingOrder.deliveredAt=Date.now();
    const newOrder = await EsistingOrder.save();
    res.status(201).json(newOrder);
  } else {
    throw new Error("order not found");
  }
});

module.exports = {
  saveOrder,
  getOrderDetails,
  getIndividualOrderDetails,
  updateOrderToPaid,
  getAllOrderDetails,
  updateDeliveredOrder
};
