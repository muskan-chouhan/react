import { useState } from 'react'
import { useRef } from "react"

function App() {
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([])

  function addTask (){ 
    const value = inputRef.current.value
    if(value === ""){
   alert("Please enter task")
     return
}
  setTasks([...tasks,value])
  inputRef.current.focus()
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
{
  tasks.map((data,index) => (
    <div key={index}>
      <ul>
        <li>{data}</li>
      </ul>
    </div>
  ))
}
    </>
  )
}

export default App
