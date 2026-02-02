import { useState } from 'react'
import { useId } from 'react'

function App() {
  const name = useId();
  const password = useId();
  const age = useId();
  const skills = useId();

  return (
    <>
    <h1 style={{textAlign:'center'}}>Use id hook</h1>
    <h2>{name}</h2>
    <h2>{password}</h2>
    <h2>{age}</h2>
    <h2>{skills}</h2>

    </>
  )
}

export default App
