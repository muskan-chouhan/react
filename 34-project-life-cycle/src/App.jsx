import { useState } from 'react'
import Profile from './component/profile'


function App() {

  const [setName, setUserName] = useState()

  return (
    <>

    <Profile setName ={setName}/>
    <br></br>

    <input type='name' placeholder='Enter Your Name' style={{marginLeft : "20px"}} onChange={(event)=>setUserName(event.target.value)}></input>
    <br></br>
    <button>Change User Name</button>
   <button>Toggle</button>

  
    </>
  )
}

export default App
