import { useState } from 'react'
import User from './component/user'


function App() {
  const [display, setDisplay] = useState(true)

  return (
      <div>
       
        <h1>Toggle in react</h1> <button onClick={()=>setDisplay(!display)}>Toggle</button>
        {/* {
        display?<h1>Muskan Chouhan</h1>:null
        } */}

        {display?<User/>:null}
       
      </div>

  )
}

export default App
