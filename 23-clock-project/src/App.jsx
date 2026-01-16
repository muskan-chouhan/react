import { useState } from 'react'
import Dropdown from './component/dropdown'
import Clock from './component/clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Default Props in React Js</h2>
    <Dropdown/>

    <Clock/>
    </>
  )
}

export default App
