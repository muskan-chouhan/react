import { useState } from "react"

export default function UserAdd(){
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')

    const createUser = async()=>{
        console.log(name,age,email);
        const url = "http://localhost:3000/users"
        let response = await fetch(url,{
            method:'Post',
            body:JSON.stringify({name,age,email})
        });
        
        response = await response.json()
        if(response){
            alert('new user added')
        }
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
