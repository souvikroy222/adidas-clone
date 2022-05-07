const express=require('express')
const {getAllProducts,filterProducts,filterProductsbyName,createProductsbyAdmin,getSingleProduct,deleteProductsbyAdmin,updateProductsbyAdmin}=require('../controllers/productController')
const router=express.Router()
const { protect, admin } = require("../middleware/authMiddleware");

router.get('/',getAllProducts)
router.get('/filter',filterProducts)
router.get('/search',filterProductsbyName)


router.route('/').post(protect,admin,createProductsbyAdmin)
router.get('/:id',getSingleProduct)

router.route('/:id').delete(protect,admin,deleteProductsbyAdmin).put(protect,admin,updateProductsbyAdmin)

module.exports=router;