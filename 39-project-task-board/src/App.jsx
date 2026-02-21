import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Task Priorty Board</h1>
     <form>
      <input type='text' placeholder='Enter you Task'></input>
      <select>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button>Add Task</button>
     </form>
    </>
  )
}

export default App
