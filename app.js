const Header = () => (
  <header>
    <h1>Task Manager</h1>
  </header>
);

const Navigation = () => (
  <nav>
    <a href="#">Home</a>
    <a href="#">Tasks</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
);

const Task = ({ title, description }) => (
  <div className="task">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="task-buttons">
      <button className="btn add">Add</button>
      <button className="btn edit">Edit</button>
      <button className="btn remove">Remove</button>
    </div>
  </div>
);

const TaskList = () => {
  const tasks = [
    { title: "Task 1", description: "Submit your assignment" },
    { title: "Task 2", description: "Study for test" },
    { title: "Task 3", description: "Clean your desk" },
    { title: "Task 4", description: "Buy groceries" },
    { title: "Task 5", description: "Go for a walk" },
    { title: "Task 6", description: "Read a book" },
  ];

  return (
    <div className="task-list">
      {tasks.map((task, idx) => (
        <Task key={idx} title={task.title} description={task.description} />
      ))}
    </div>
  );
};

const Footer = () => (
  <footer>
    <p>&copy; 2025 Khushi’s Task Manager</p>
  </footer>
);

const App = () => (
  <React.Fragment>
    <Header />
    <Navigation />
    <main>
      <h2>Tasks for This Week</h2>
      <TaskList />
    </main>
    <Footer />
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
