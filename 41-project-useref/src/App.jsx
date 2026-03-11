import { useState } from 'react'
import { useRef } from "react"

function App() {
  const inputRef = useRef(null)

  return (
    <>
      <h1>Task Manger</h1>
      <input
        type='text'
        placeholder='Enter your name'
      /> 
      
       <button>Task Button</button>
    </>
  )
}

export default App
