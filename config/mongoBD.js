//подключение к базе данных
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const DB = await mongoose.connect(process.env.DB_MONGO);
    console.log(
      `Mongo DB is connected. Name: ${DB.connection.name}. Port: ${DB.connection.port}. Host: ${DB.connection.host}`
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
