import { useState } from 'react'
import useToggle from './useToggle'
function App() {
  const[value,toggleValue] =useToggle(true)
  // console.log('val-----',value);
  
  return (
    <>
     
     <button onClick={toggleValue}>Toggle Heading</button>
     <button onClick={()=>toggleValue(false)}>Show Heading</button>
     <button onClick={()=>toggleValue(true)}>Hide Heading</button> 
     {
      value?<h1>Custom Hooks IN React Js</h1>
      :null
     }
    </>
  )
}

export default App
