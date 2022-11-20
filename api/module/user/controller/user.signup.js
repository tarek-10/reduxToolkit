const { StatusCodes } = require("http-status-codes");
const userModel = require("../../../model/user.model");
const bcrypt = require("bcrypt");

const userSignupFun = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "user already exist ...!" });
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
        if (err) throw err;
        const newUser = await userModel.insertMany({
          name,
          email,
          password: hash,
        });

        res.status(StatusCodes.OK).json({ message: "success", newUser });
      });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "error", error });
  }
};

module.exports = userSignupFun;
