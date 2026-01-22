import { useEffect } from "react";

const Profile = ({ userName }) => {

  // 🔵 MOUNTING PHASE (sirf ek baar)
  useEffect(() => {
    console.log("Profile mounted");
  }, []);

  // 🟡 UPDATING PHASE (jab userName change ho)
  useEffect(() => {
    if (userName) {
      console.log("Username updated:", userName);
    }
  }, [userName]);

  return (
    <div style={{
      width: "200px",
      border: "1px solid #ccc",
      boxShadow: "1px 2px 3px #ccc",
      margin: "10px",
      padding: "10px"
    }}>
      <h3>{userName || "No Name"}</h3>
      <p>Software Developer</p>
    </div>
  );
};

export default Profile;
