import { useState } from 'react'
import UserProfile from './UserProfile'

function App() {
  const [userName, setUserName] = useState('Muskan')
  const [status, setStatus] = useState(true)
  
  function changeName() {
    if (userName === "Muskan") {
      setUserName('radha')
    } else {
      setUserName('Muskan')
    }

  }
  function changestatus(){
    if(status){
      setStatus(active)
      console.log(status);
      
    }else{
      setStatus(inactive)
      console.log(status);
    }
  }
  return (
    <>
      <h1>Live user Dashboard</h1>
      <UserProfile name={userName} status={status}/>
      <br></br><br></br>
      <button onClick={changeName}>Change User</button>
      <button onClick={changestatus}>Toggle Status</button>
      <button>Hide Profile</button>
    </>
  )
}

export default App
