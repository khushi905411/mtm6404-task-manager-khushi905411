import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  // Load saved tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [showCompleted, setShowCompleted] = useState(true);

  // Save tasks to localStorage when updated
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Toggle complete/incomplete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="container">
        {/* ✅ My Tasks heading added */}
        <h2 style={{ marginBottom: "1rem" }}>My Tasks</h2>

        {/* Task input form */}
        <TaskForm addTask={addTask} />

        {/* Show completed checkbox */}
        <label style={{ display: "block", marginBottom: "1rem" }}>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />{" "}
          Show Completed
        </label>

        {/* List of tasks */}
        <TaskList
          tasks={tasks}
          showCompleted={showCompleted}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
