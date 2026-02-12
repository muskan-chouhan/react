export default function UserAdd(){
    return(
        <div>
            <h1>Add New User</h1>
            <input
                type="text" 
                placeholder="Enter Name">
            </input>
            <br></br><br></br>
            <input
                type="number" 
                placeholder="Enter Age">
            </input>
            <br></br><br></br>
            <input
                type="email" 
                placeholder="Enter Email">
            </input>
             <br></br><br></br>
             <button>Add User</button>
        </div>
    )
}
