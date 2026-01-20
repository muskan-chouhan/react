import { useState } from 'react'
import Status from './component/status'

function App() {
  const [status, setStatus] = useState("offline")

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
    </>
  )
}

export default App
