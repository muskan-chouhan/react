import { useState } from 'react'
import Alert from './Alert'

function App() {
  const [msg,setmsg] = useState('')
  const [type, setType] = useState("")
  function showAlert (Message,tp){
      setmsg(Message)
      setType(tp)
  }
  return (
    <>
      <h1>Alert Project</h1>
      <Alert msg={msg} type={type}/>
      <br></br>
      <button onClick={() => showAlert("Data Saved",'green')}>Show Success</button>
      <button onClick={() => showAlert("Something Wrong",'red')}>Show Error</button>
      <button onClick={() => showAlert("Please Try again",'blue')}>Show Warning</button>
    </>

  )
}

export default App
