const {
  saveOrder,
  getOrderDetails,
  updateDeliveredOrder,
  getAllOrderDetails,
  updateOrderToPaid,
  getIndividualOrderDetails,
} = require("../controllers/orderController");
const express = require("express");

const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");

router
  .route("/")
  .post(protect, saveOrder)
  .get(protect, getIndividualOrderDetails);
  router.route("/customerorders").get(protect, admin, getAllOrderDetails);
router.route("/:id").get(protect, getOrderDetails);

router.route("/allorders/:id").put(protect, admin, updateDeliveredOrder);
//router.put('/allorders/:id',protect,admin,updateDeliveredOrder)
//router.get('/allorders',protect,admin,getAllOrderDetails)
router.route("/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;


