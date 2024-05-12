import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoForm = ({ onSubmit, todo }) => {
  const [name, setName] = useState(todo ? todo.name : "");
  const [description, setDescription] = useState(todo ? todo.description : "");
  const [dateTime, setDateTime] = useState(
    todo ? new Date(todo.dateTime) : new Date()
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && description.trim() !== "") {
      onSubmit({
        // id: todo ? todo.id : Date.now(),
        name: name,
        description: description,
        dateTime: dateTime.toLocaleString(),
      });
      setName("");
      setDescription("");
      setDateTime(new Date());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <DatePicker
        selected={dateTime}
        onChange={(date) => setDateTime(date)}
        dateFormat="Pp"
        minDate={new Date()}
        minTime={new Date()}
        showTimeSelect
        maxTime={new Date(new Date().setHours(23, 59, 59))} // Set maximum selectable time to end of the day
      />
      <button type="submit">{todo ? "Update Todo" : "Add Todo"}</button>
    </form>
  );
};

export default TodoForm;
