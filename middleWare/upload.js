const multer = require("multer");
const path = require("path");

// обьект настроек
const tempDir = path.join(__dirname, "../", "temp"); // путь к папке
console.log("<-----", tempDir);
const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
  fileFilter: (req, file, callback) => {
    const acceptableExtensions = ["png", "jpg", "jpeg", "jpg"];
    if (
      !acceptableExtensions.some(
        (extension) =>
          path.extname(file.originalname).toLowerCase() === `.${extension}`
      )
    ) {
      return callback(
        new Error(
          `Extension not allowed, accepted extensions are ${acceptableExtensions.join(
            ","
          )}`
        )
      );
    }
    callback(null, true);
  },
});

module.exports = upload;
