import { useState } from 'react'
import TaskForm from './TaskForm'
import ShowCard from './ShowTaskCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Task Priorty Board</h1>
     <TaskForm/>
     <ShowCard/>
    </>
  )
}

export default App
