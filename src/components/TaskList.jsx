import React from "react";

const TaskList = ({ tasks, showCompleted, deleteTask, toggleComplete }) => {
  const priorities = { High: 3, Medium: 2, Low: 1 };

  const sorted = [...tasks].sort(
    (a, b) => priorities[b.priority] - priorities[a.priority]
  );

  return (
    <div>
      {sorted.map((task) => {
        if (!showCompleted && task.completed) return null;

        return (
          <div key={task.id} className="task-item">
            <div>
              <div className={task.completed ? "completed" : ""}>{task.text}</div>
              <small>Priority: {task.priority}</small>
            </div>
            <div>
              <button className="toggle" onClick={() => toggleComplete(task.id)}>
                {task.completed ? "✓" : "Mark"}
              </button>{" "}
              <button className="delete" onClick={() => deleteTask(task.id)}>
                🗑
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
