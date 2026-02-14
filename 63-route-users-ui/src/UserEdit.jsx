function UserEdit(){
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
        </div>
    )
}
export default UserEdit;