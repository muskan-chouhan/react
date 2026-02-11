import { useEffect } from "react";

 function App() {

  useEffect(()=>{
    getUsersData()
 },[])

  async function getUsersData(){
   const url = 'http://localhost:3000/users'
   let response = await fetch(url);
   response = await response.json()
  console.log(response);
  
  }
  return (
    <>
     <h1>install JSON server and Make API</h1>
    </>
  )
}

export default App
