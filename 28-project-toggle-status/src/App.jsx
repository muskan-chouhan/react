import { useState } from 'react'

function App() {
  const [status,setStatus] = useState(true)
  const statusCheck = ()=>{
    setStatus(!status)
  }
  return (
    <>
    <button onClick={statusCheck}>Toggle Status</button>
    <br></br>
    <br></br>
    <div>
      <h1>{status?'Online':'Offline'}</h1>
    </div>
    </>
  )
}

export default App
