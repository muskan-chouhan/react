import { useState } from "react"

export default function UserAdd(){
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')
    const createUser = ()=>{
        console.log(name,age,email);
        
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Add New User</h1>
            <input
                type="text" 
                placeholder="Enter Name"
                onChange={(e)=>setName(e.target.value)}>
            </input>
            <br></br><br></br>
            <input
                type="number" 
                placeholder="Enter Age"
                onChange={(e)=>setAge(e.target.value)}>
            </input>
            <br></br><br></br>
            <input
                type="email" 
                placeholder="Enter Email"
                onChange={(e)=>setEmail(e.target.value)}>
            </input>
             <br></br><br></br>
             <button onClick={createUser}>Add User</button>
        </div>
    )
}
