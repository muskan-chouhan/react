import { useState } from 'react'
import Clock from './component/clock'

function App() {
  const [color, setColor] = useState('green')

  return (
    <>
      <h2>Default Props in React Js</h2>

      <select onChange={(event) => setColor(event.target.value)}>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
      </select>

      <Clock color={color} />
    </>
  )
}

export default App
