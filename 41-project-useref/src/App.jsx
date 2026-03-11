import { useState } from 'react'


function App() {
  const [name, setName] = useState("Anya")


  return (
    <>
      <h1>Task Manger</h1>
      <input
        type='text'
        placeholder='Enter your name'
        onChange={(e) => setName(e.target.value)}
      /> 
      
       <button>Click</button>
    </>
  )
}

export default App
