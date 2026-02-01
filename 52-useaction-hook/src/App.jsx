import { useState } from 'react'
import { useActionState } from 'react'

async function handelSubmit(previousData, formData) {
  let name = formData.get('name');
  let password = formData.get('password');
  await new Promise(res => setTimeout(res, 2000))
  console.log('handelSubmit called', name, password);
  if(name && password){
    return {message: 'data submitted',name, password}
  }else{
    return {error: 'Failed to submit,Enter data properly',name, password}
  }

}

function App() {
  const [data, action, pending] = useActionState(handelSubmit, undefined)

  return (
    <>
      <h1 style={{ textAlign: "center" }}>UseAction Hook</h1>
      <form action={action}>
        <input
          type='text' name='name' placeholder='enter name' defaultValue={data?.name}
        />
        <br /><br />
        <input
          type='password' name='password' placeholder='enter password'defaultValue={data?.password}
        />
        <br /><br />
        <button disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>

      </form>
         <br/>
        {
          data?.error && <span style={{color:'red'}}>{data?.error}</span>
          
        }
                {
          data?.message && <span style={{color:'green'}}>{data?.message}</span>
          
        }

        {
          <h2>name:{data?.name}</h2>
        }    
                {
          <h2>password:{data?.password}</h2>
        }    
      
    </>
  )
}

export default App
