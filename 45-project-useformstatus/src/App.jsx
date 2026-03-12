import { useState } from 'react'
import ContactForm from './component/ContactForm'
function App() {
  
  const handelSubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.log('submit');
  }
  
  return (
    <>
      <h1>UseFormStatus</h1> 
      <form action={handelSubmit}>
        <ContactForm/>
      </form>
    </>
  )
}

export default App
