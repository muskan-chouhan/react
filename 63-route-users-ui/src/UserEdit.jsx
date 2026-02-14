import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react"
function UserEdit() {
        const [name,setName]=useState('')
        const [age,setAge]=useState('')
        const [email,setEmail]=useState('')
    const { id } = useParams();
    //   console.log(id);

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        // console.log(id);
        const url = "http://localhost:3000/users/" + id
        // console.log(url);
        let response = await fetch(url);
        response = await response.json()
        // console.log(response); 
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>User Edit Page</h1>
            <input
                type="text"
                placeholder="user name">
            </input>
            <br></br>
            <br></br>
            <input
                type="number"
                placeholder="user age">
            </input>
            <br></br>
            <br></br>
            <input
                type="text"
                placeholder="user email">
            </input>
            <br></br>
            <br></br>
            <button>Edit User</button>
        </div>
    )
}
export default UserEdit;