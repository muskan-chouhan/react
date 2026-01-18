import { useState } from 'react'



function App() {
  const [text, setText] = useState()
   

  return (
    <>
    <button onClick={(event)=>setText(event.target.value)}>Go Online</button>
    <br></br>
    <br></br>
     <button>Go Offline</button>
     <h2>{text}</h2>
    </>
  )
}

export default App
