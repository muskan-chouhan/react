import { useState } from 'react'
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
           placeholder='Enter Message'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
