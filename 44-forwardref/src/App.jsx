import { useState } from 'react'
import UserInput from './component/userinput'
import { useRef } from 'react'
function App() {
  const inputRef = useRef(null)

  function updateInput (){
inputRef.current.value = 200;
inputRef.current.focus();
inputRef.current.style.color = 'red';
  }

  return (
    <>
    <h1>Forward Ref</h1>
    <UserInput ref = {inputRef}/>
 
    <button onClick={updateInput}>Update Input Field</button>
    
    </>
  )
}

export default App
