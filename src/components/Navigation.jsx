const Navigation = ({ children }) => (
  <nav style={{
    backgroundColor: "#FB9E3A",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap"
  }}>
    {children}
  </nav>
);

export default Navigation;
