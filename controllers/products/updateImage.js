const path = require("path");
const fs = require("fs/promises");
const productModels = require("../../models/productModels");
const imageDir = path.join(__dirname, "../../", "public", "images");

const updateImage = async (req, res) => {
  console.log(req.file);
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(imageDir, originalname);
  await fs.rename(tempUpload, resultUpload);
  const images = path.join("images", originalname);
  const { id } = req.params;
  await productModels.findByIdAndUpdate(id, { images });
  res.json({
    images,
  });
};

module.exports = updateImage;
