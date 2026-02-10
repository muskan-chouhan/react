import { useEffect } from "react"

function App() {
  useEffect(()=>{

  })

  async function getUserData() {
    const url = 'https://dummyjson.com/users'
    let response = await fetch(url) 
    response = await response.json() 
   
    
  } 
  return (
    <>
      <h1>Fetch Data From Api</h1>
    </>
  )
}

export default App
