const User = ({displayName}) => {
const name = "anil";
return(
    <>
    <button onClick={()=>displayName('name')}>Display name</button>
    </>
)
}

export default User;