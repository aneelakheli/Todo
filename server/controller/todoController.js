const Todo = require("../models/todoModels");

async function addTodoController(req, res) {
  try {
    const { name, description, dateJoin, status } = req.body;
    const addTodo = await Todo({ name, description, dateJoin, status }).save();
    return res.status(201).json({
      success: true,
      addTodo,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}

async function getAllTodoController(req, res) {
  try {
    let filter = {}; // Initialize an empty filter object

    // Check if the status query parameter is provided
    if (req.query.status !== undefined) {
      filter.status = req.query.status; // Add the status filter if present in the query
    }
    const getAllTodo = await (Object.keys(filter).length === 0
      ? Todo.find()
      : Todo.find(filter));
    return res.status(200).json({
      success: true,
      getAllTodo,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}

async function getOneTodoController(req, res) {
  try {
    const { id } = req.params;
    const getOneTodo = await Todo.findById({ _id: id }).lean();
    return res.status(200).json({
      success: false,
      getOneTodo,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}

async function updateTodoController(req, res) {
  try {
    const { id } = req.params;
    const { name, description, dateJoin, status } = req.body;
    const updateTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        name,
        description,
        dateJoin,
        status,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      updateTodo,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}

async function deleteTodoController(req, res) {
  try {
    const { id } = req.params;
    const deleteTodo = await Todo.findByIdAndDelete({ id: id });
    return res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}

module.exports = {
  addTodoController,
  getAllTodoController,
  getOneTodoController,
  updateTodoController,
  deleteTodoController,
};
