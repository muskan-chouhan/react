import { useState } from 'react'
import Status from './component/status'

function App() {
  const [status, setStatus] = useState("offline")
  const [count, setCount] = useState(0);
  return (
    <>
      <Status status={status} />

      <button onClick={() => setStatus("online")}>
        Go Online
      </button>
         
      <br /><br />

      <button onClick={() => setStatus("offline")}>
        Go Offline
      </button>
        <br></br>
      <br></br>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  )
}

export default App
