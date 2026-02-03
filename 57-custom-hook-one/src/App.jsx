import { useState } from 'react'
import useCounter from './useCounter'
function App() {
 const [count,increment,decrement] = useCounter()
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
