import { useState } from 'react'


function App() {
  const[name,setName] = useState("Anya")


  return (
    <>
    <h1>UseRef</h1>
    <input
    type='text'
    placeholder='Enter your name'
    onChange={(e)=>setName(e.target.value)}
    >
    <button>Click</button>
    </input>
    </>
  )
}

export default App
