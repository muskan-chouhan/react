import { useState } from 'react'
import User from './component/user'


function App() {


  const displayName = (name) =>{
    alert(name)
  }

  
  const getUser = (name) =>{
alert ('get user fucntion called');

  }
  return (
    <>
       <h1>call parent component from child component</h1>
       <User displayName={displayName} name = "anil"  getUser= {getUser} />
       <User displayName={displayName} name = "piter" />
       <User displayName={displayName} name = "alex" />
       <User displayName={displayName} name = "dezy" />
    </>
  )
}

export default App
