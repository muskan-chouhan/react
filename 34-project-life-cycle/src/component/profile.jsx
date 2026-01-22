const Profile = ({ userName }) => {
  return (
    <div style={{
      width: "200px",
      border: "1px solid #ccc",
      boxShadow: "1px 2px 3px #ccc",
      margin: '10px'
    }}>
      <img
        style={{ width: '200px' }}
        src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500"
      />
      <div style={{ padding: "10px" }}>
        <h2>{userName}</h2>
        <p>Software Developer</p>
      </div>
    </div>
  )
}

export default Profile
