import { useState } from 'react'
import Counter from './counter'

function App() {
  const [fruit, setFruit] = useState("Apple")

  const handelFruit = () => {
    setFruit("Banana")
  }

  return(
    <div>
      <h1>State and Exersie</h1>
      <h1>{fruit}</h1>
      <button onClick={handelFruit}>
        Change Fruit Name
      </button>

      <Counter />
    </div>
  )
}

export default App
