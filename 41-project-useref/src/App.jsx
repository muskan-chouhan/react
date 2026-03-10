import { useState } from 'react'


function App() {
  const[name,setName] = useState("")

  return (
    <>
    <h1>UseRef</h1>
    <input
    type='text'
    placeholder='Enter your name'
    name={name}
    >

    </input>
    </>
  )
}

export default App
