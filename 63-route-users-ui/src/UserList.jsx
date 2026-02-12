import { useEffect, useState } from "react";
import './App.css'

function UserList() {
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false)
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
        // console.log(usersData);


    }
    return (
        <>

            <ul className="user-list user-list-head">
                <li>Name</li>
                <li>Age</li>
                <li>Email</li>
            </ul>
            {
                !loading ?
                    usersData && usersData.map((user) => (
                        <ul className="user-list" key={user.name}>
                            <li>{user.name}</li>
                            <li>{user.age}</li>
                            <li>{user.email}</li>
                        </ul>
                    ))
                    : <h1>data loading...</h1>
            }
        </>
    )
}

export default UserList
