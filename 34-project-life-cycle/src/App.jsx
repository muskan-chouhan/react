import { useState } from 'react'
import Profile from './component/profile'

function App() {

  const [userName, setUserName] = useState("")
  const [inputName, setInputName] = useState("")

  return (
    <>
      <Profile userName={userName} />

     <br></br><br></br>

      <input
        type="text"
        placeholder="Enter Your Name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      <br></br><br></br>

      <button onClick={() => setUserName(inputName)}>
        Change User Name
      </button>
    </>
  )
}

export default App
