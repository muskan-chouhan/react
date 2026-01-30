import { useState } from 'react'
import AddUsers from './component/AddUsers'
import DisplayUsers from './component/DisplayUsers'

function App() {


  return (
    <>
    <h1 style={{textAlign : "center"}}>Lifting state up</h1>
    <AddUsers/>
    <DisplayUsers/>
    
    </>
  )
}

export default App
