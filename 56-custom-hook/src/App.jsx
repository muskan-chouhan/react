import { useState } from 'react'
import useToggle from './useToggle'
function App() {
  const[value,toggleValue] =useToggle(true)
  // console.log('val-----',value);
  const [data, setdata] = useToggle(true);
  return (
    <>
     
     <button onClick={toggleValue}>Toggle Heading</button>
     <button onClick={()=>toggleValue(false)}>Show Heading</button>
     <button onClick={()=>toggleValue(true)}>Hide Heading</button> 
     {
      value?<h1>Custom Hooks IN React Js</h1>
      :null
     }
     <hr></hr>
     <button onClick={setdata}>Toggle Heading</button>
     <button onClick={()=>setdata(false)}>Show Heading</button>
     <button onClick={()=>setdata(true)}>Hide Heading</button> 
    <h2>Heading 2</h2>
    </>
  )
}

export default App
