import { useState } from 'react'
import { useRef } from "react"

function App() {
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([])

  function addTask() {
    const value = inputRef.current.value
    if (value === "") {
      alert("Please enter task")
      return
    }
    // setTasks([...tasks,value])
    setTasks(function (prev) {
      return [...prev, value]
    })
    inputRef.current.focus()
    inputRef.current.value = ""
  }

  function deleteTask(index){
         const newArray = tasks.filter((item,i) => i !== index)
         setTasks(newArray)
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
        tasks.length === 0
          ?
          <h2>No tasks yet</h2>
          :
          <ul>
            {tasks.map((data, index) => (
              <li key={index}>
                {data}
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
      }
    </>
  )
}

export default App
