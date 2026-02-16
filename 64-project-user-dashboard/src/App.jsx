import { useState } from 'react'
import UserProfile from './UserProfile'

function App() {
  const [userName, setUserName] = useState('Muskan')
    function changeName() {
        if(userName  === "Muskan"){
           setUserName('radha')
        }else{
            setUserName('Muskan')
        }
        
    }
  return (
    <>
      <h1>Live user Dashboard</h1>
      <UserProfile name={userName}/>
                  <br></br><br></br>
            <button onClick={changeName}>Change User</button>
            <button>Toggle Status</button>
            <button>Hide Profile</button>
    </>
  )
}

export default App
