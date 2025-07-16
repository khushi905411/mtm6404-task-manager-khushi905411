import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

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
        {/* Section Title */}
        <h2 style={{ marginBottom: "1rem" }}>My Tasks</h2>

        {/* Add Task Form */}
        <TaskForm addTask={addTask} />

        {/* ✅ Show Completed Checkbox Section */}
        <div className="checkbox-section">
          <label>
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={() => setShowCompleted(!showCompleted)}
            />
            Show Completed Tasks
          </label>
        </div>

        {/* Task List */}
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
