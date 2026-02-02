import { useState } from 'react'
import { useId } from 'react'

function App() {

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Use id hook</h1>
      {/* <h2>{name}</h2>
    <h2>{password}</h2>
    <h2>{age}</h2>
    <h2>{skills}</h2> */}
   <UserForm/>
  <hr></hr>
<UserForm/>

    </>
  )
}

export default App

const UserForm = () => {
  const name = useId();
  const password = useId();
  const term = useId();
  const skills = useId();
  return (
    <>
      <form action=''>
        <label htmlFor={name}>Enter user name</label>
        <input type='text' id={name} placeholder='enter name' /><br/><br/>
        <label htmlFor={password}>Enter user password</label>
        <input type='text' id={password} placeholder='enter password' /><br/><br/>
        <label htmlFor={skills}>Enter user skills</label>
        <input type='checkbox' id={skills} placeholder='enter skills' /><br/><br/>
        <label htmlFor={term}>Enter term and condtion</label>
        <input type='checkbox' id={term} placeholder='enter term' />
      </form>
    </>
  )
}