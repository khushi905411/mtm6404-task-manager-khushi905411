import Header from "./components/Header";
import Navigation from "./components/Navigation";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Task Manager" />
      <Navigation>
        <a href="#" style={navLinkStyle}>Home</a>
        <a href="#" style={navLinkStyle}>Tasks</a>
        <a href="#" style={navLinkStyle}>About</a>
        <a href="#" style={navLinkStyle}>Contact</a>
      </Navigation>
      <main>
        <h2 style={{ textAlign: "center", marginTop: "1rem" }}>Tasks for This Week</h2>
        <TaskList />
      </main>
      <Footer />
    </>
  );
}

const navLinkStyle = {
  color: "white",
  fontWeight: "bold",
  textDecoration: "none"
};

export default App;
