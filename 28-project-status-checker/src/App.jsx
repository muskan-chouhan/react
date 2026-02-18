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

  return (
    <div className="container">
      <button onClick={goOnline} style={{border: status === "Online" ? "2px solid green"  : "2px solid gray"}}>Go Online</button>
      <button onClick={goOffline} style={{border: status === "Offline" ? "2px solid red" : "2px solid gray"}}>Go Offline</button>

      <div className="status">
        <div className={status === "Online" ? "online" : "offline"}></div>
        <h2>{status}</h2>
      </div>
    </div>
  );
}

export default App;
