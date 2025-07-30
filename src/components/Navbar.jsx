import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#E6521F", padding: "1rem" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Home</Link>
    </nav>
  );
}
