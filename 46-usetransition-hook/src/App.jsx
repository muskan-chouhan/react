import { useState } from 'react'

function App() {
  const [pending, setPending] = useState(false)
  function handel(){

    setPending(true)
  } 
  return (
    <>
 <h1>useTransition Hook in React js 19</h1>


 <button disabled ={pending} onClick={handel}>Click</button>
    </>
  )
}

export default App
