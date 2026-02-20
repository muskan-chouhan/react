import { useState } from 'react'
import Alert from './Alert'

function App() {
  const [msg,setmsg] = useState('')
  const [type, setType] = useState("")
  
  function showAlert (Message,tp){
      setmsg(Message)
      setType(tp)
  }
  const close = (msg,type) =>{
     msg = "";
    }
  return (
    <>
      <h1>Alert Project</h1>
      {
      //  {msg && <Alert msg={msg} type={type} />}
        msg?<Alert msg={msg} type={type} onClose ={close} showAlert ={showAlert}/>:null
      }
      
      <br></br>
      <button onClick={() => showAlert("Data Saved",'green')}>Show Success</button>
      <button onClick={() => showAlert("Something Wrong",'red')}>Show Error</button>
      <button onClick={() => showAlert("Please Try again",'blue')}>Show Warning</button>
    </>

  )
}

export default App
