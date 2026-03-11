import { useState } from 'react'
import { useRef } from "react"

function App() {
  const inputRef = useRef(null)
  function addTask (){
    console.log(inputRef.current.value)
  }
  return (
    <>
      <h1>Task Manger</h1>
      <input
        type='text'
        placeholder='Enter your name'
        ref={inputRef}
      /> 
      
       <button onClick={addTask}>Task Button</button>
    </>
  )
}

export default App
