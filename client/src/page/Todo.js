import React, { useState } from "react";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleEditTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setSelectedTodo(null);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm
        onSubmit={selectedTodo ? handleEditTodo : handleAddTodo}
        todo={selectedTodo}
      />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onEdit={handleEditClick}
      />
    </div>
  );
};

export default TodoPage;
