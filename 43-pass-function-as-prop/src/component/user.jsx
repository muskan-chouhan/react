const User = ({displayName,name,getUser}) => {

return(
    <>
    <button onClick={()=>displayName('name')}>Display name</button>
    <button onClick={()=>getUser()}>Get User</button>
    </>
)
}

export default User;