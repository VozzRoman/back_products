const asyncHandler = require("express-async-handler");
const productModels = require("../../models/productModels");
const fs = require("fs/promises");
// const path = require("path");
const cloudinary = require("../../cloudinary/cloudinary");

// const imagesDir = path.join("public", "images");

const addProduct = asyncHandler(async (req, res) => {
  console.log(req.files);

  if (req.method === "POST") {
    let images = [];
    for (const file of req.files) {
      const newPath = await cloudinary.uploader.upload(file.path, {
        folder: "images",
        use_filename: true,
        unique_filename: true,
      });
      images.push(newPath.url);
      fs.unlink(file.path);
    }
    const product = await productModels.create({
      ...req.body,
      images,
    });
    res.status(200).json({
      code: 200,
      status: "ok",
      data: product,
    });
  }
});

module.exports = addProduct;
