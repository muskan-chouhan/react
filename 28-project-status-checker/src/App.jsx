import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Offline");

  function goOnline() {
    setStatus("Online");
  }

  function goOffline() {
    setStatus("Offline");
  }
  const getButtonStyle = (type) => {
    const isActive = status === type

    return {
      backgroundColor: isActive
        ? (type === "Online" ? "green" : "red")
        : "#eee",
      color: isActive ? "white" : "black",
      border: "2px solid " + (type === "Online" ? "green" : "red")
    }
  }

  return (
    <div className="container">
      <button onClick={goOnline} style={getButtonStyle("Online")}>Go Online</button>
      <button onClick={goOffline} style={getButtonStyle("Offline")}>Go Offline</button>

      <div className="status">
        <div className={status === "Online" ? "online" : "offline"}></div>
        <h2>{status}</h2>
      </div>
    </div>
  );
}

export default App;
