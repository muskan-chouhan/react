const User = ({ data }) => {
    return (
        <div style={{

            border: '2px solid green',
            padding: '10px',
            width: '400px',
            margin:'10px',
            borderRadius:'10px'

        }}>
            <h3>Name :<span style={{ color: 'green' }}>{data.name}</span></h3>
            <h3>Name :<span style={{ color: 'green' }}>{data.age}</span></h3>
            <h3>Name :<span style={{ color: 'green' }}>{data.email}</span></h3>
        </div>
    )
}

export default User;