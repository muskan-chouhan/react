import { useState } from 'react'
import Alert from './Alert'

function App() {
  const [msg, setmsg] = useState('')
  const [type, setType] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  function showAlert(Message, tp) {
    setmsg(Message)
    setType(tp)
    setIsVisible(true)
  }

  const closeAlert = () => {
    setIsVisible(false)
    setTimeout(() => {
      setmsg('')
      setType('')
    }, 300);

  }

  return (
    <>
      <h1>Alert Project</h1>
      {
        //  {msg && <Alert msg={msg} type={type} />}
        msg ? 
        <Alert
         msg={msg} 
         type={type} 
         onClose={closeAlert} 
         isVisible={isVisible}/> : null
      }

      <br></br>
      <button onClick={() => showAlert("Data Saved", 'green')}>Show Success</button>
      <button onClick={() => showAlert("Something Wrong", 'red')}>Show Error</button>
      <button onClick={() => showAlert("Please Try again", 'blue')}>Show Warning</button>
    </>

  )
}

export default App
