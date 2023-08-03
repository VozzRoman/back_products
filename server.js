const app = require("./app");
const mongoBD = require("./config/mongoBD");
mongoBD();
app.listen(5050, () => {
  console.log("Server running. Use our API on port: 5050");
});
