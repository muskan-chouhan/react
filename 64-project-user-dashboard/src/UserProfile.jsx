import { useEffect, useState } from 'react'

function UserProfile({ name, status }) {

    const [cardStyle, setCardStyle] = useState({
        width: "200px",
        border: "1px solid #cccccc3b",
        boxShadow: "1px 2px 3px 0px #cccccc57",
        margin: '10px'
    })

    const textColor = "black"
    useEffect(() => {
        console.log("Fetching user data...");

        return () => {
            console.log("Cleaning up user session");
        }
    }, [])

    useEffect(() => {
        console.log(`User changed to ${name}`);
    }, [name])

    useEffect(() => {
        console.log(`User is now ${status ? "Active" : "Inactive"}`);
    }, [status])

    return (
        <>
            <div style={{
                display: 'flex',
                flexWrap: "wrap"
            }}>

                <div style={cardStyle}>
                    <img
                        style={{ width: '200px' }}
                        src='https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60'
                        alt="profile"
                    />

                    <div style={{
                        padding: "10px",
                        color: textColor
                    }}>
                        <h2>{name}</h2>
                        {status ? <h3>Active</h3>
                            : <h3>Inactive</h3>
                        }
                        <p>Software Developer</p>
                    </div>
                </div>

            </div>


        </>
    )
}

export default UserProfile
