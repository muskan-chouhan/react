import { useEffect } from "react"

function App() {
  useEffect(()=>{
         getUserData()
  },[])

  async function getUserData() {
    const url = 'https://dummyjson.com/users'
    let response = await fetch(url) 
    response = await response.json() 
    console.log(response);
    
  } 
  return (
    <>
      <h1>Fetch Data From Api</h1>
    </>
  )
}

export default App
