import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ListOverview from "./pages/ListOverview";
import TaskListPage from "./pages/TaskListPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListOverview />} />
        <Route path="/list/:id" element={<TaskListPage />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
