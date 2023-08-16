const getUserCart = async (req, res) => {
  const { user } = req;
  console.log("USER-->", user);

  res.status(200).json({ code: 200, status: "ok", products: user.products });
};

module.exports = getUserCart;
