import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Status from './component/status'

function App() {
  const [status, setStatus] = useState('')
    

  return (
    <>
    <Status status={status}/>

    <button onClick={(event)=>setStatus({online})}>Go Online</button>
    <br></br>
    <br></br>
    <button onClick={()=>setStatus({offline})}>Go Offline</button>
    </>
  )
}

export default App
