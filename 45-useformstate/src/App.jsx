
import {useFormStatus} from 'react-dom'

function App() {
  
  const handelSubmit = async() =>{
  await new Promise(res =>setTimeout(res,2000));
    
console.log('submit');

  }

  function CustomerForm (){
     const  {pending} = useFormStatus();
    return(
      <>
           <input type='text' placeholder='Enter Name'></input>
      <br></br>
      <br></br>
      <input type='password' placeholder='Enter Password'></input>
      <br>
      </br>
      <button disabled={pending}>{pending?'submitting...' :'Submit'}</button>
      <br>
      </br>

      </>
    )
  }
  return (
    <>
      <h1>UserFromSatatus Hook in recat js 19</h1>
    <form action={handelSubmit}>
    <CustomerForm/>
   
      </form>
    </>
  )
}

export default App
