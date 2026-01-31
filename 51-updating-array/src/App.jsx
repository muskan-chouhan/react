import { useState } from 'react'


function App() {
  const [name, setName] = useState('muskan')

  return (
    <>
    <h1 style={{textAlign:'center'}}>Updating Array in state</h1>
    <h2>{name}</h2>
    <button onClick={()=>setName('muskan chouhan')}>Updating Name</button>
 
    </>
  )
}

export default App
