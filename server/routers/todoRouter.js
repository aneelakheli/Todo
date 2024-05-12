const express = require("express");
const {
  getAllTodoController,
  addTodoController,
  getOneTodoController,
  updateTodoController,
  deleteTodoController,
} = require("../controller/todoController");
const validate = require("../middleware/validators");
const validator = require("../middleware/validate");
const router = express.Router();

router.get("/", getAllTodoController);
router.post(
  "/",
  validate(["name", "description", "dateJoin"]),
  validator,
  addTodoController
);
router.get("/:id", getOneTodoController);
router.patch(
  "/:id",
  validate(["name", "description", "dateJoin", "status"]),
  validator,
  updateTodoController
);
router.delete("/:id", deleteTodoController);

module.exports = router;
