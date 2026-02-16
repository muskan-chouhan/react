import { useState } from 'react'
import UserProfile from './UserProfile'

function App() {
  const [userName, setUserName] = useState('Muskan')
  const [status, setStatus] = useState(true)
  const [profile ,setProfile] = useState(true)
   function ProfileStatus(){
    setProfile(!profile)
   }
  function changeName() {
    if (userName === "Muskan/") {
      setUserName('radha')
    } else {
      setUserName('Muskan')
    }

  }
  function changestatus(){
   setStatus(!status)
  }
  return (
    <>
      <h1>Live user Dashboard</h1>
      <UserProfile name={userName} status={status} />
      <br></br><br></br>
      <button onClick={changeName}>Change User</button>
      <button onClick={changestatus}>Toggle Status</button>
      <button onClick={ProfileStatus}>Hide/show Profile</button>
    </>
  )
}

export default App
