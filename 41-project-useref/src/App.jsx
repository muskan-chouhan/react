import { useState } from 'react'
import { useRef } from "react"

function App() {
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([])

  function addTask (){ 
    const value = inputRef.current.value
    if(value === ""){
  alert("Please enter task")
}
  setTasks([...tasks,value])
  inputRef.current.value = ""
  }
  return (
    <>
      <h1>Task Manger</h1>
      <input
        type='text'
        placeholder='Enter Your Task'
        ref={inputRef}
      /> 
      
       <button onClick={addTask}>Task Button</button>
    </>
  )
}

export default App
