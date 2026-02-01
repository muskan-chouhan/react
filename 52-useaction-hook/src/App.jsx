import { useState } from 'react'
import { useActionState } from 'react'

async function handelSubmit  (previousData,formData){
 let name = formData.get('name');
  let password = formData.get('password');
  await new  Promise(res=>setTimeout(res,2000))
  console.log('handelSubmit called',name,password);
  
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
          type='password' namse='password' placeholder='enter password'
        />
        <br /><br />
        <button>submit</button>
      </form>
    </>
  )
}

export default App
