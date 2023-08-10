//ФОРМируем Модель
const { model, Schema } = require("mongoose");
const productsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is reqired"],
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: [true, "price is reqired"],
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    brand: {
      type: String,
      required: [true, "brand is reqired"],
    },
    discountPercentage: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0.0,
    },
    stock: {
      type: Number,
      required: [true, "stock is reqired"],
    },
    category: {
      type: String,
      required: [true, "category is reqired"],
    },
    thumbnail: {
      type: String,
      default: "",
    },
    images: {
      type: String,
      default: "",
    },
    count: {
      type: Number,
      default: 1,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("products", productsSchema);
