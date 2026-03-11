import { useState } from 'react'
import { useRef } from "react"

function App() {
  const inputRef = useRef(null)
  function handelInput (){
    inputRef.current.value = '123'
  }
  return (
    <>
      <h1>Task Manger</h1>
      <input
        type='text'
        placeholder='Enter your name'
        ref={inputRef}
      /> 
      
       <button onClick={handelInput}>Task Button</button>
    </>
  )
}

export default App
