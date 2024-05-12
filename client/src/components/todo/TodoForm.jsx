import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoForm = ({ onSubmit, todo }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateJoin, setdateJoin] = useState(
    todo ? new Date(todo.dateJoin) : new Date()
  );
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && description.trim() !== "") {
      onSubmit({
        name: name,
        description: description,
        dateJoin: dateJoin.toLocaleString(),
      });
      setName("");
      setDescription("");
      setdateJoin(new Date());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <DatePicker
        selected={dateJoin}
        onChange={(date) => setdateJoin(date)}
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
