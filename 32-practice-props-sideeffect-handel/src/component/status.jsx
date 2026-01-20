import { useEffect } from "react";

const Status = ({ status }) => {





  useEffect(()=>{
  if (status === "online") {
    console.log("user online");
  } else {
    console.log("user offline");
  }
  },[status])

  return (
    <>
      <h1>{status}</h1>
    </>
  )
}

export default Status
