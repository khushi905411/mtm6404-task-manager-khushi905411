import React from "react";

const TaskList = ({ tasks, showCompleted, deleteTask, toggleComplete }) => {
  const priorities = { High: 3, Medium: 2, Low: 1 };

  // Sort tasks by priority (highest to lowest)
  const sorted = [...tasks].sort(
    (a, b) => priorities[b.priority] - priorities[a.priority]
  );

  return (
    <div>
      <h3>📋 Current Tasks</h3>

      {sorted.map((task) => {
        // Skip if completed tasks are hidden
        if (!showCompleted && task.completed) return null;

        // Safely handle missing or undefined priority
        const priority = task.priority || "Low";
        const priorityClass = priority.toLowerCase();

        return (
          <div key={task.id} className="task-card">
            <div>
              <strong className={task.completed ? "completed" : ""}>
                {task.text}
              </strong>
              <p>
                Priority:{" "}
                <span className={`priority ${priorityClass}`}>
                  {priority}
                </span>
              </p>
            </div>

            <div className="task-actions">
              <button
                className="btn toggle"
                onClick={() => toggleComplete(task.id)}
              >
                {task.completed ? "↩️ Undo" : "✅ Done"}
              </button>
              <button
                className="btn delete"
                onClick={() => deleteTask(task.id)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
