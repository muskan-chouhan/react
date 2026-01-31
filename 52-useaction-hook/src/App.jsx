import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 style={{textAlign:"center"}}>UseAction Hook</h1>
    <input 
      type='text'name='name'placeholder='enter name'
    />
    <br/><br/>
    <input 
      type='password'name='password'placeholder='enter password'
    />
    <br/><br/>
    <button>submit</button>

    </>
  )
}

export default App
