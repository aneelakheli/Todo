import React from "react";
import "./style.css";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <div className="todo-card">
      <div className="todo-content">
        <h3>{todo.name}</h3>
        <p>{todo.description}</p>
        <p>{todo.dateJoin}</p>
        <p>{todo.status}</p>
      </div>
      <div className="todo-actions">
        <button onClick={() => onEdit(todo.id)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
