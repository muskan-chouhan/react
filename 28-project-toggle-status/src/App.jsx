import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState(true);

  const statusCheck = () => {
    setStatus(!status);
  };

  // Badge circle style (inline alternative to class)
  const badgeStyle = {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    backgroundColor: status ? "green" : "red",
  };

  // Button dynamic style
  const buttonStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "white",
    backgroundColor: status ? "green" : "red",
    boxShadow: status
      ? "0 0 6px rgba(0,128,0,0.6)"
      : "0 0 6px rgba(255,0,0,0.6)",
    transition: "0.3s ease",
  };

  return (
    <>
      <button onClick={statusCheck} style={buttonStyle}>
        {status ? "Go Offline" : "Go Online"}
      </button>

      <br />
      <br />

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={badgeStyle}></span>
        <h2 style={{ margin: 0 }}>
          {status ? "Online" : "Offline"}
        </h2>
      </div>
    </>
  );
}

export default App;
