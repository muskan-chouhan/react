import { useState } from 'react'
import useToggle from './useToggle'
function App() {
  const[value,toggleValue] =useToggle(true)
  console.log('val-----',value);
  
  return (
    <>
     
     <button>Toggle Heading</button>
     <button>Show Heading</button>
     <button>Hide Heading</button> 
     {
      value?<h1>Custom Hooks IN React Js</h1>
      :null
     }
    </>
  )
}

export default App
