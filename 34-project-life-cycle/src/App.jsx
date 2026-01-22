import { useState } from 'react'
import Profile from './component/profile'


function App() {
  const [setName, setUserName] = useState('rahul')
  function handel(){
    setUserName(raj)
  }
  return (
    <>
    <Profile setName ={setName}/>
    <br></br>
    <br></br>
   <button onClick={handel}>Change User Name</button>
   <button>Toggle</button>

  
    </>
  )
}

export default App
