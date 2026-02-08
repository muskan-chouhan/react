import { Link } from "react-router"
function UsersList() {
      const userData = [
      { id:1 , name:'anil' },
      { id:2 , name:'mohan' },
      { id:3 , name:'shyam' },
      { id:4 , name:'rahul' },
    ]
  return (
    <div style={{marginLeft:'20px'}}>
    <h1>User List Page</h1>
    {
      userData.map((data)=>(
        <div>
          <h3><Link to = '' >{data.name}</Link></h3>
        </div>
      ))
    }
   </div>
  )
}

export default UsersList