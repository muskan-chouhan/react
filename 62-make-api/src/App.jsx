import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [usersData, setUsersData] = useState([])
  useEffect(() => {
    getUsersData()
  }, [])

  async function getUsersData() {
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
        usersData && usersData.map((user) => (
          <ul className="user-list">
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
          </ul>

        ))
      }
    </>
  )
}

export default App
