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
    <form onSubmit={handleSubmit} className="task-form">
      <h3>🧾 Add a New Task</h3>

      <label>Task Name</label>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label>Priority</label>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="btn add" type="submit">➕ Add Task</button>
    </form>
  );
};

export default TaskForm;
