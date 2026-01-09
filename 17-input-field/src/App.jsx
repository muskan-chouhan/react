import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const[value,setValue]=useState('anil sidhu')
  return (
    <>
    <h1>get input filed value</h1>
    <input type='text' value={value}onChange={(evnet)=>setValue(event.target.value)}placeholder='Enter user name'></input>
    <h1>{value}</h1>

    <button onClick={()=>setValue("")}>Clear Value</button>
    </>
  )
}

export default App
