const userModel = require("../../../model/user.model");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSignFun = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        const token = jwt.sign(
          { email, name: user.name },
          process.env.PRIVATE_KEY
        );

        res.status(StatusCodes.OK).json({
          message: "success",
          token,
          user: {
            name: user.name,
            email: user.email,
          },
        });
      } else {
        res.status(StatusCodes.NOT_FOUND).json({ message: "invalid-user" });
      }
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ message: "user not found...!" });
    }
  } catch (error) {}
};
module.exports = userSignFun;
