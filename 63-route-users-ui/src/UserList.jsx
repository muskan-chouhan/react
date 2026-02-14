import { useEffect, useState } from "react";
import './App.css'
import { useNavigate } from "react-router";

function UserList() {
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        getUsersData()
    }, [])

    async function getUsersData() {
        const url = 'http://localhost:3000/users'
        let response = await fetch(url);
        response = await response.json()
        // console.log(response);
        setUsersData(response)
        setLoading(false)
        // console.log(usersData)
    }

  const deleteUser = async (id) => {
    const url = 'http://localhost:3000/users';

    let response = await fetch(url + "/" + id, {
        method: 'DELETE'
    });

    if (response) {
        alert('User deleted');
        //  // UI se user hatao
        getUsersData()
    }
}  

const editUser = (id) =>{
   navigate("/edit"+id);
}
    return (
        <>

            <ul className="user-list user-list-head">
                <li>Name</li>
                <li>Age</li>
                <li>Email</li>
                <li>Action</li>
            </ul>
            {
                !loading ?
                    usersData && usersData.map((user) => (
                        <ul className="user-list" key={user.name}>
                            <li>{user.name}</li>
                            <li>{user.age}</li>
                            <li>{user.email}</li>
                            <li>
                                <button onClick={()=>deleteUser(user.id)}>Delete</button>
                            </li>
                            <li>
                                <button onClick={()=>editUser(user.id)}>Edit</button>
                            </li>
                        </ul>
                    ))
                    : <h1>data loading...</h1>
            }
        </>
    )
}

export default UserList
