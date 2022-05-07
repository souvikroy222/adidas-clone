const express = require("express");

const {
  registerUser,
  authUser,deleteUsersProfilebyAdmin,
  updateUsersProfilebyAdmin,
  getUsersProfilebyAdmin,fetchUsersProfilebyAdmin
} = require("../controllers/userController");

const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
router
  .route("/")
  .post(registerUser)
  .get(protect, admin, getUsersProfilebyAdmin);
//router.post("/login", authUser);
router.route('/login').post(authUser)
router.route('/:id').delete(protect,admin,deleteUsersProfilebyAdmin).put(protect,admin,updateUsersProfilebyAdmin).get(protect,admin,fetchUsersProfilebyAdmin)



module.exports = router;
