import { useState } from 'react'
import UserProfile from './UserProfile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Live user Dashboard</h1>
      <UserProfile />
    </>
  )
}

export default App
