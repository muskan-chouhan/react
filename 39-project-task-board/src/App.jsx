import { useState } from 'react'
import TaskForm from './TaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Task Priorty Board</h1>
    <TaskForm/>
    </>
  )
}

export default App
