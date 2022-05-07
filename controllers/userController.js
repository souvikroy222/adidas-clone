const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

//@description authentication user
//@route POST /api/users/login
//@access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("please add all fields");
  }
  const user = await User.findOne({ email });
  console.log(user);
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});

//@description register new user
//@route POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all fields");
  }

  //check if the user is already exists or not
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(200);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  }
});


//@description get all users
//@route GET /api/users
//@access ADMINS
const getUsersProfilebyAdmin = asyncHandler(async (req, res) => {
  const users = await User.find({});
  if (users) {
    res.json({
      users,
    });
  } else {
    res.status(404);
    throw new Error("sorry, users not found");
  }
});


//@description delete individual user
//@route GET /api/users/userId
//@access ADMINS
const deleteUsersProfilebyAdmin=asyncHandler(async(req,res)=>{
  const users=await User.findById(req.params.id)
  if(users){
    await users.remove()
    res.json({message:'user deleted'})
  }
  else{
    res.status(404)
    throw new Error('sorry, users not found')
  }
})

//@description edit individual user
//@route GET /api/users/userId
//@access ADMINS
const fetchUsersProfilebyAdmin=asyncHandler(async(req,res)=>{
  const users=await User.findById(req.params.id).select('-password')
  if(users){
    res.json(users)   
  }
  else{
    res.status(404)
    throw new Error('sorry, users not found')
  }
})

//@description changing the profile
//@route POST /api/users/profile
//@access ADMINS
const updateUsersProfilebyAdmin = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin=req.body.isAdmin    
  } else {
    res.status(404);
    throw new Error("user not found");
  }
  const updatedUsersProfile = await user.save();
  res.json({
    _id: updatedUsersProfile._id,
    name: updatedUsersProfile.name,
    email: updatedUsersProfile.email,
    isAdmin: updatedUsersProfile.isAdmin,   
  });
});

module.exports = {
  registerUser,
  authUser,
  updateUsersProfilebyAdmin,deleteUsersProfilebyAdmin,
  getUsersProfilebyAdmin,fetchUsersProfilebyAdmin
};
