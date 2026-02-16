import { useState } from "react"

function UserProfile() {
    const [userName, setUserName] = useState('Muskan')


    function changeName() {
        if(userName  === "Muskan"){
           setUserName('radha')
        }else{
            setUserName('Muskan')
        }
        
    }
    const [cardStyle, setCardStyle] = useState({
        width: "200px",
        border: "1px solid #cccccc3b",
        boxShadow: "1px 2px 3px 0px #cccccc57",
        margin: '10px'
    })

    const textColor = "black"

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
                        <h2>{userName}</h2>

                        <p>Software Developer</p>
                    </div>
                </div>

            </div>

            <br></br><br></br>
            <button onClick={changeName}>Change User</button>
            <button>Toggle Status</button>
            <button>Hide Profile</button>
        </>
    )
}

export default UserProfile
