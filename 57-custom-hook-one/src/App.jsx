import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count+1)
  }
   function decrement(){
    setCount(count-1)
  }
  return (
    <>
     <h1>Custom hook practice</h1>
     <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
