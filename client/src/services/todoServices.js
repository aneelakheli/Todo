import http from "./api.js";

const getAllTodo = () => {
  return http.get("/:id");
};

const getOneTodo = (id) => {
  return http.get(`/todo/${id}`);
};

const createTodo = (data) => {
  return http.post("/todo", data);
};

const updateTodo = (id, data) => {
  return http.patch(`/todo/${id}`, data);
};

const deleteTodo = (id) => {
  return http.delete(`/todo/${id}`);
};

export const todoService = {
  getAllTodo,
  getOneTodo,
  updateTodo,
  deleteTodo,
  createTodo,
};
