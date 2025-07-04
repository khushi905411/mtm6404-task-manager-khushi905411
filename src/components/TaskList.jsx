import { useState, useEffect } from "react";

const PERMANENT_TASKS = [
  { id: "permanent-1", title: "Do the dishes", description: "No description" },
  { id: "permanent-2", title: "Call mom", description: "No description" },
];

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Load tasks from localStorage on mount, ensure permanent tasks exist
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    let loadedTasks = savedTasks ? JSON.parse(savedTasks) : [];

    // Add permanent tasks if missing
    PERMANENT_TASKS.forEach((pt) => {
      if (!loadedTasks.find((t) => t.id === pt.id)) {
        loadedTasks.unshift(pt);
      }
    });

    setTasks(loadedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    // Always keep permanent tasks in the list
    let filteredTasks = tasks.filter(
      (task) => !PERMANENT_TASKS.find((pt) => pt.id === task.id)
    );
    const newTasks = [...PERMANENT_TASKS, ...filteredTasks];
    if (JSON.stringify(tasks) !== JSON.stringify(newTasks)) {
      setTasks(newTasks);
    } else {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
  }, [tasks]);

  const handleAddOrUpdate = () => {
    if (!title.trim()) return;

    if (editingId) {
      // Prevent editing permanent tasks
      if (PERMANENT_TASKS.find((pt) => pt.id === editingId)) {
        alert("You cannot edit this permanent task.");
        return;
      }

      // Update existing task
      const updatedTasks = tasks.map((task) =>
        task.id === editingId ? { ...task, title, description } : task
      );
      setTasks(updatedTasks);
      setEditingId(null);
    } else {
      // Add new task
      const newTask = {
        id: Date.now().toString(),
        title,
        description: description || "No description",
      };
      setTasks([...tasks, newTask]);
    }
    setTitle("");
    setDescription("");
  };

  const handleEdit = (id) => {
    // Prevent editing permanent tasks
    if (PERMANENT_TASKS.find((pt) => pt.id === id)) {
      alert("You cannot edit this permanent task.");
      return;
    }
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setEditingId(id);
    }
  };

  const handleDelete = (id) => {
    // Prevent deleting permanent tasks
    if (PERMANENT_TASKS.find((pt) => pt.id === id)) {
      alert("You cannot delete this permanent task.");
      return;
    }
    setTasks(tasks.filter((task) => task.id !== id));
    if (editingId === id) {
      setTitle("");
      setDescription("");
      setEditingId(null);
    }
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h3>{editingId ? "Edit Task" : "Add a New Task"}</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleAddOrUpdate} style={buttonStyle}>
        {editingId ? "Update Task" : "Add Task"}
      </button>

      <div style={taskGridStyle}>
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          tasks.map((task) => {
            const isPermanent = PERMANENT_TASKS.some((pt) => pt.id === task.id);
            return (
              <div key={task.id} style={taskStyle}>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <div style={{ marginTop: "0.5rem" }}>
                  <button
                    onClick={() => handleEdit(task.id)}
                    style={{
                      ...buttonStyle,
                      backgroundColor: isPermanent ? "#ccc" : "#ffc107",
                      color: isPermanent ? "#666" : "#222",
                      marginRight: "0.5rem",
                      cursor: isPermanent ? "not-allowed" : "pointer",
                    }}
                    disabled={isPermanent}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    style={{
                      ...buttonStyle,
                      backgroundColor: isPermanent ? "#ccc" : "#dc3545",
                      cursor: isPermanent ? "not-allowed" : "pointer",
                    }}
                    disabled={isPermanent}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "0.5rem",
  marginRight: "1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  width: "200px",
  marginBottom: "0.5rem",
};

const buttonStyle = {
  padding: "0.6rem 1rem",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const taskGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1rem",
  marginTop: "2rem",
};

const taskStyle = {
  backgroundColor: "#E6521F",
  color: "white",
  padding: "1rem",
  borderRadius: "10px",
};

export default TaskList;
