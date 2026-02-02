import { useContext } from "react";
import { SubjectContext } from "./contextData";
const Subject = () => {
const subject = useContext(SubjectContext)
  return (
  <div style={{backgroundColor:"#f2e6ff", padding:"20px"}} >
    <h1>Subject is : {subject}</h1>
  </div>
  )
}

export default Subject;
