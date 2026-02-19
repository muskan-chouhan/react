import { useState } from 'react'
import Alert from './Alert'

function App() {
  const [msg,setmsg] = useState('')
  function showAlert (Message){
      setmsg(Message)
  }
  return (
    <>
      <h1>Alert Project</h1>
      <Alert msg={msg}/>
      <br></br>
      <button onClick={() => showAlert("Data Saved")}>Show Success</button>
      <button onClick={() => showAlert("Something Wrong")}>Show Error</button>
      <button onClick={() => showAlert("Please Try again")}>Show Warning</button>
    </>
  )
}

export default App
