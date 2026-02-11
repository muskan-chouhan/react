import { useEffect, useState } from "react";

 function App() {
  const [usersData,setUsersData]=useState([])
  useEffect(()=>{
    getUsersData()
 },[])

  async function getUsersData(){
   const url = 'http://localhost:3000/users'
   let response = await fetch(url);
   response = await response.json()
   // console.log(response);
    setUsersData(response)
    console.log(usersData);
    
  
  }
  return (
    <>
     <h1>install JSON server and Make API</h1>
     {
      usersData.map((data,index)=>(
        <ul key={index}>
          <li>{data.name}</li>
        </ul>
      ))
     }
    </>
  )
}

export default App
