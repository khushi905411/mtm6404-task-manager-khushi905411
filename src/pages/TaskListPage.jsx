import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useParams, Link } from "react-router-dom";

export default function TaskListPage() {
  const { lists, updateTasks } = useContext(TaskContext);
  const { id } = useParams();
  const list = lists.find((l) => l.id.toString() === id);

  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [showCompleted, setShowCompleted] = useState(true);

  if (!list) return <p>List not found. <Link to="/">Go back</Link></p>;

  // Add a task
  const addTask = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      priority,
      completed: false,
    };

    updateTasks(list.id, [...list.tasks, newTask]);
    setTaskText("");
    setPriority("Medium");
  };

  // Delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = list.tasks.filter((t) => t.id !== taskId);
    updateTasks(list.id, updatedTasks);
  };

  // Toggle completion
  const toggleComplete = (taskId) => {
    const updatedTasks = list.tasks.map((t) =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    updateTasks(list.id, updatedTasks);
  };

  // Sort tasks by priority
  const priorities = { High: 3, Medium: 2, Low: 1 };
  const sortedTasks = [...list.tasks].sort(
    (a, b) => priorities[b.priority] - priorities[a.priority]
  );

  return (
    <div className="container">
      <h2>{list.name}</h2>

      {/* Add Task Form */}
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="New task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button className="btn add" type="submit">Add Task</button>
      </form>

      {/* Show/Hide Completed Toggle */}
      <label className="checkbox-section">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
        Show Completed Tasks
      </label>

      {/* Task Display Section */}
      {sortedTasks.map((task) => {
        if (!showCompleted && task.completed) return null;

        return (
          <div key={task.id} className="task-card">
            <div>
              <div className={task.completed ? "completed" : ""}>
                {task.text}
              </div>
              <div className={`priority ${task.priority.toLowerCase()}`}>
                {task.priority}
              </div>
            </div>
            <div>
              <button className="btn toggle" onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Undo" : "Mark Done"}
              </button>
              <button className="btn delete" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}

      <Link to="/">← Back to all lists</Link>
    </div>
  );
}
