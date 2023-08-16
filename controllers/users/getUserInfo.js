const getUserInfo = async (req, res) => {
  const { user } = req;
  res
    .status(200)
    .json({
      code: 200,
      status: "ok",
      data: { name: user.name, email: user.email },
    });
};

module.exports = getUserInfo;
