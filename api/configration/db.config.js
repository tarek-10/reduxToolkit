const mongoose = require("mongoose");

const connection = async () => {
  return await mongoose
    .connect(process.env.CONNECTION_URL)
    .then((result) => {
      console.log("DB CONNECTED SUCCESSFULLY ...!");
    })
    .catch((error) => {
      console.log("Fail To Connect DB ...!");
    });
};

module.exports = connection;
