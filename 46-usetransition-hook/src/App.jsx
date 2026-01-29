import { useState, useTransition } from 'react'

function App() {
  const [pending, setTransition] = useTransition()
const handel = async() => {
   setTransition( async ()=>{
    await new Promise(res => setTimeout(res,2000)) 
   })
   
      
  } 
  return (
    <>
 <h1>useTransition Hook in React js 19</h1>
{
  pending ?<img src='https://media.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif' style={{width:"100px"}}></img>
  :null
}

 <button disabled ={pending} onClick={handel}>Click</button>
    </>
  )
}

export default App
