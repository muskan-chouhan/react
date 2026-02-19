import { useState } from 'react'
import Alert from './Alert'

function App() {
  const [msg,setmsg] = useState('')
  function showAlert (Message){
      setmsg('Message')
  }
  return (
    <>
      <h1>Alert Project</h1>
      <Alert msg={msg}/>
      <br></br>
      <button onClick={() => showAlert("Hello")}>Show Success</button>
      <button>Show Error</button>
      <button>Show Warning</button>
    </>
  )
}

export default App
