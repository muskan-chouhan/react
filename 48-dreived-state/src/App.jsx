import { useState } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState('') 
  const total = users.length;
  const last = users[users.length-1]
  const unique = [...new Set(users)].length;

 const  handeAddUsers = ()=>{
    setUsers([...users,user])
  }
  // console.log(users);
  
  return (
    <>
     <h1>Derived state in React</h1>
      <div>
        <h2>Total users : {total}</h2>
        <h2>Last User : {last}</h2>
        <h2>Unique Users : {unique} </h2>
      </div>
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
