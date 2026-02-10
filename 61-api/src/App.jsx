import { useEffect } from "react"

function App() {
  useEffect(()=>{

  })

  function getUserData() {
    const url = 'https://dummyjson.com/users'
    let response = fetch(url)  
  }
  return (
    <>
      <h1>Fetch Data From Api</h1>
    </>
  )
}

export default App
