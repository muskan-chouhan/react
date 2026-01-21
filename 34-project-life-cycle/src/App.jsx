import { useState } from 'react'
import Profile from './component/profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile/>
    <br></br>
    <br></br>
   <button>Change User Name</button>
  
   <button>Toggle</button>
    </>
  )
}

export default App
