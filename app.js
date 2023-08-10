const express = require("express");
const logger = require("morgan"); //выводит логи (запросы на сервер) в консоль
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
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

// app.use((err, req, res, next) => {
//   const statusCode = res.statusCode || 500;
//   res.status(statusCode);
//   res.json({ code: statusCode, stack: err.stack });
// });

module.exports = app;
