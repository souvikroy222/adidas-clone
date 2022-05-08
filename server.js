const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const path=require('path')


const errorHandler = require("./middleware/errorMiddleware");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const {uploadProductImage}=require('./routes/uploadImageRoutes')
const fileUpload=require('express-fileupload')
const cloudinary = require("cloudinary").v2;
const bodyParser = require("body-parser");



const connectDB = require("./config/db");

dotenv.config();
app.use(express.json());

// Cloudinary configuration
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_cloud_name,
	api_key:process.env.CLOUDINARY_api_key,
	api_secret: process.env.CLOUDINARY_api_secret,
});


//cross origin
/*const whitelist = ["http://localhost:5000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));*/
const PORT = process.env.PORT || 5000;



connectDB();

app.use(fileUpload({useTempFiles:true}));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadProductImage);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);
__dirname=path.resolve()
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'frontend/build')))
  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'frontend','build','index.html')))

}else{
  app.get('/',(req,res)=>{
    res.send('API is running')
  }) 

}







app.listen(PORT, console.log(`server is running on port 5000`));
