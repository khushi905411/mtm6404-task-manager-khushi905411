const Task = ({ title, description, completed, onDelete, onEdit }) => {
  return (
    <div style={{
      backgroundColor: completed ? "#28a745" : "#E6521F",
      color: "white",
      padding: "1rem",
      borderRadius: "10px"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Status: {completed ? "✅ Completed" : "❌ Not Completed"}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button style={editStyle} onClick={onEdit}>Edit</button>
        <button style={deleteStyle} onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

const editStyle = {
  backgroundColor: "#ffc107",
  color: "#222",
  padding: "0.4rem 0.8rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const deleteStyle = {
  backgroundColor: "#dc3545",
  color: "white",
  padding: "0.4rem 0.8rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Task;
