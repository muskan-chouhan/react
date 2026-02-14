import { useParams } from "react-router";

function UserEdit(){
  const {id} = useParams();
    return(
        <div style={{textAlign:"center"}}>
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