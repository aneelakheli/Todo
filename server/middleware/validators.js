const { check } = require("express-validator");
module.exports = function validate(params) {
  try {
    const result = [];
    params.forEach((element) => {
      switch (element) {
        case "name":
          result.push(
            check("name", "name is check.")
              .notEmpty()
              .withMessage("Name is required")
          );
          break;
        case "description":
          result.push(
            check("description", "description is invalid")
              .notEmpty()
              .withMessage("description is required.")
          );
          break;
        case "dateJoin":
          result.push(
            check("dateJoin", "date  is invalid")
              .notEmpty()
              .withMessage("date is invalid")
          );
          break;
        case "status":
          result.push(
            check("status", "status is invalid")
              .notEmpty()
              .withMessage("status is invalid")
          );
          break;
      }
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};
