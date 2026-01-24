import { useState } from 'react'
import UserProfile from './user-profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Style with css  module in react js </h1>


      <UserProfile/>
    </>
  )
}

export default App
