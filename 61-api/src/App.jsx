import { useEffect, useState } from "react"

function App() {
  const [usersData,setUsersData] = useState([])
  useEffect(()=>{
         getUserData()
  },[])

  async function getUserData() {
    const url = 'https://dummyjson.com/users'
    let response = await fetch(url) 
    response = await response.json() 
    // console.log(response.users);
    setUsersData(response.users)
  } 
  // console.log(usersData);
  
  return (
    <>
      <h1>Fetch Data From Api</h1>
      {
       usersData && usersData.map((user)=>(
         <h1>{user.firstName}</h1>
       ))
      }
    </>
  )
}

export default App
