import { useState } from 'react'
import "./App.css";
function App() {
  const [status, setStatus] = useState(true)
  const statusCheck = () => {
    setStatus(!status)
  }
  return (
    <>
      <button onClick={statusCheck} >Toggle Status</button>
      <br></br>
      <br></br>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span className={status ? "online" : "offline"}></span>
        <h1>{status ? "Online" : "Offline"}</h1>
      </div>

    </>
  )
}

export default App
