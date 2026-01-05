import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      function callFun(){
        alert ("hii i am muskan")
      }
      const fruit = (name)=>{
        alert(name)
      } 
  return (
  
      <div>
        <h1>Event and Function call</h1>
        <button onClick={callFun}>click me</button>
        <button onClick={()=>fruit("banana")}>banana</button>
        <button onClick={()=>fruit("mango")}>mango</button>
      </div> 
  )
}

export default App
