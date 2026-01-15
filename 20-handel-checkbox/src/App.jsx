import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from './component/skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Handel Checkboxes</h1>
   <Skills/>
    
    </>
  )
}

export default App
