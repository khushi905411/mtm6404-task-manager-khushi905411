import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask({
      id: Date.now(),
      text,
      priority,
      completed: false,
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button className="add" type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
