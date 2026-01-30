import { useState } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState('') 

 const  handeAddUsers = ()=>{
    setUsers([...users,user])
  }
  // console.log(users);
  
  return (
    <>
     <h1>Derived state in React</h1>

     <input type="text" onChange={(event)=>setUser(event.target.value)}></input>
     <button onClick={handeAddUsers}>Add User</button>
     {
      users.map((item,index)=>(
        <h4 key={index}>{item}</h4>
      ))
     }
    </>
  )
}

export default App
