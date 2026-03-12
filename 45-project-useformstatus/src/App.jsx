import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {


  return (
    <>
      <h1>UseFormStatus</h1>
      <form action='#'>
        <input 
          type='text'
          placeholder='Enter Your Name'
        /><br/><br/>
        <input
           type='email'
           placeholder='Enter Your email'   
        /><br/><br/>
        <textarea
           type='text'
           placeholder='Enter Message'
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
