import { useState } from 'react'
import { useActionState } from 'react'

function handelSubmit(){
  console.log('handelSubmit called');
  
}

function App() {
  const [data, action, pending] = useActionState(handelSubmit,undefined)

  return (
    <>
      <h1 style={{ textAlign: "center" }}>UseAction Hook</h1>
      <form action={action}>
        <input
          type='text' name='name' placeholder='enter name'
        />
        <br /><br />
        <input
          type='password' name='password' placeholder='enter password'
        />
        <br /><br />
        <button>submit</button>
      </form>
    </>
  )
}

export default App
