const { StatusCodes } = require("http-status-codes");

module.exports = (schema) => {
  return (req, res, next) => {
    const validationErr = [];
    const checkMethod = ["body", "params", "query", "file", "files"];

    checkMethod.forEach((key) => {
      if (req[key]) {
        if (schema[key]) {
          const validationResult = schema[key].validate(req[key]);

          if (validationResult.error) {
            validationErr.push(validationResult.error.details[0].message);
          }
        }
      }
    });

    if (validationErr.length) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: validationErr.join() });
      return;
    }
    next();
  };
};
