const express = require("express");
const logger = require("morgan");
const cors = require("cors");
//путь к папке config---------------------
const path = require("path");
const configParh = path.join(__dirname, "./config/.env");
require("dotenv").config({ path: configParh });
console.log(process.env.Yana);
//------------

const productsRouter = require("./routes/api/products");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
//учим приложуху принемать запросы
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/products", productsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
