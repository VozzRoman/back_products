const { UserModel } = require("../../models/userModels");

const addProduct = async (req, res) => {
  const { user } = req;
  const { id: productId } = req.body;
  user.products.push(productId);
  const updateUser = await UserModel.findByIdAndUpdate(user._id, user, {
    new: true,
  });
  res
    .status(200)
    .json({ code: 200, status: "ok", products: updateUser.products });
};

module.exports = addProduct;
