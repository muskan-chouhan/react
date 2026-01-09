import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [name, setName] = useState('')
  const [password, setPass] = useState('')
  const [email, setEmail] = useState('')
  return (
    <>
      <h1>Controlled Component</h1>
      <div>
        <form action="" method=''>
          <input
            type="text"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br></br><br></br>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <br></br><br></br>
          <input
            type="text"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br><br></br>

 
        </form>
        <button>Submit</button><br></br><br></br>
        <button onClick={() => { setName(''); setEmail(''); setPass('') }}>Clear</button>
        <h1>{name}</h1>
        <h1>{password}</h1>
        <h1>{email}</h1>
      </div>

    </>
  )
}

export default App
