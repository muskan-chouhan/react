import { useState } from 'react'
import { useActionState } from 'react'

async function handelSubmit(previousData, formData) {
  let name = formData.get('name');
  let password = formData.get('password');
  await new Promise(res => setTimeout(res, 2000))
  console.log('handelSubmit called', name, password);
  if(name && password){
    return {message: 'data submitted'}
  }else{
    return {error: 'Failed to submit,Enter data properly'}
  }

}

function App() {
  const [data, action, pending] = useActionState(handelSubmit, undefined)

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
        <button disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>
        <br/>
        {
          data?.error && <span style={{color:'red'}}>{data?.error}</span>
          
        }
                {
          data?.message && <span style={{color:'green'}}>{data?.message}</span>
          
        }
      </form>
      
      
    </>
  )
}

export default App
