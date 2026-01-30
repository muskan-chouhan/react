import { useState } from 'react'
const AddUsers = () =>{
        const [user, setUser] = useState()

    return(
        
        <>
        <h1>Add Users : {user}</h1>
        <input type="text" placeholder="Enter Name" onChange={(even)=>setUser(event.target.value)}></input>
        <hr/>
        </>
    )
}
export default AddUsers; 