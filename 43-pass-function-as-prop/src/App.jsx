import { useState } from 'react'
import User from './component/user'


function App() {


  const displayName = (name) =>{
    alert("name")
  }

  return (
    <>
       <h1>call parent component from child component</h1>
       <User displayName={displayName}/>
    </>
  )
}

export default App
