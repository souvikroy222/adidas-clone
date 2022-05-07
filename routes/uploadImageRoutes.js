// Requiring module
const express = require("express");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadProductImage = async (req, res) => {
 
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  console.log(result);
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(200).json(result.secure_url);
};

module.exports = {
  uploadProductImage,
};
