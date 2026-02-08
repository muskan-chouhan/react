import { useParams } from "react-router"
function UserDetails() {
    const paramsData = useParams();
    console.log(paramsData.id);
    
  return (
    <div style={{marginLeft:'20px'}}>
    <h1>User Detail</h1>
    <h2>User id is :{paramsData.id }</h2>

   </div>
  )
}

export default UserDetails