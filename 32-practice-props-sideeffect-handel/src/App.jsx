import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Status from './component/status'

function App() {
  const [status, setStatus] = useState(false)
   

  return (
    <>
    <Status status={status}/>

    </>
  )
}

export default App
