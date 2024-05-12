import React from "react";

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div>
            <strong>{todo.name}</strong> - {todo.description} - {todo.dateTime}
            <button onClick={() => onEdit(todo)}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
