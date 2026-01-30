import { useState } from 'react'
const AddUsers = ({setUser}) =>{
    

    return(
        
        <>
        <h1>Add Users </h1>
        <input type="text" placeholder="Enter Name" onChange={(even)=>setUser(event.target.value)}></input>
        <hr/>
        </>
    )
}
export default AddUsers; 