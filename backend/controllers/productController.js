const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

//@description fetch all products from frontend
//@route GET /api/products
//@access public
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.json(products);
});

//@description fetch individual single product
//@route GET /api/products/:id
//@access public
const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const individualProduct = await Product.findById(id);
  console.log(individualProduct);
  if (individualProduct) {
    res.json(individualProduct);
  } else {
    res.status(200).json("can not find the product");
  }
});

//@description delete products by user
//@route GET /api/products/productId
//@access ADMINS
const deleteProductsbyAdmin = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "user deleted" });
  } else {
    res.status(404);
    throw new Error("sorry, product not found");
  }
});

//@description create products by user
//@route POST /api/products
//@access ADMINS
const createProductsbyAdmin = asyncHandler(async (req, res) => {
  const product = new Product({
    user: req.user._id,
    name: req.body.name,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    description: req.body.description,
    rating: req.body.rating,
    price: req.body.price,
    countInStock: req.body.countInStock,
  });
  const newProduct = await product.save();
  if (newProduct) {
    res.status(201).json({ message: "product created success" });
  } else res.status(404);
  throw new Error("sorry, product not created");
});

//@description create products by user
//@route POST /api/products
//@access ADMINS
const updateProductsbyAdmin = asyncHandler(async (req, res) => {
  const ExistingProduct = await Product.findById(req.params.id);

  if (ExistingProduct) {
    ExistingProduct.name = req.body.name || ExistingProduct.name;
    ExistingProduct.image = req.body.image || ExistingProduct.image;
    ExistingProduct.brand = req.body.brand || ExistingProduct.brand;
    ExistingProduct.category = req.body.category || ExistingProduct.category;
    ExistingProduct.description =
      req.body.description || ExistingProduct.description;
    ExistingProduct.rating = req.body.rating || ExistingProduct.rating;

    ExistingProduct.price = req.body.price || ExistingProduct.price;
    ExistingProduct.countInStock =
      req.body.countInStock || ExistingProduct.countInStock;

    const newProduct = await ExistingProduct.save();
    res.status(201).json(newProduct);
  } else {
    res.status(404);
    throw new Error("sorry, product not created");
  }
});

//@description filter products by user
//@route GET /api/products/filter?categories='sports or any other categoriees'
//@access PUBLIC
const filterProducts = asyncHandler(async (req, res) => {
  const key = req.query.categories;
  console.log(req.query.categories);
  const filteredProducts = await Product.find({ category:key });
  if (filteredProducts) {
    res.status(200).json(filteredProducts);
  } else {
    throw new Error("product not found");
  }
});

//@description filter products by the product name
//@route GET /api/products/search?name='sports or any other categoriees'
//@access PUBLIC
const filterProductsbyName = asyncHandler(async (req, res) => {
  const key = req.query.name.toUpperCase();  
  const filteredProducts = await Product.find({'name': { $regex: key}});
  console.log(filteredProducts);
  if (filteredProducts) {
    res.status(200).json(filteredProducts);
  } else {
    throw new Error("product not found");
  }
});

module.exports = {
  getAllProducts,
  getSingleProduct,
  deleteProductsbyAdmin,
  createProductsbyAdmin,
  updateProductsbyAdmin,
  filterProductsbyName,

  filterProducts,
};
