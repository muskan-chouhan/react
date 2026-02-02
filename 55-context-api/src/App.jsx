import College from "./component/college"
import { SubjectContext } from "./component/contextData"
import { useState } from "react"
function App() {
const[subject,setSubject] = useState('')
  return (
    <div style={{ backgroundColor: "#4d0099", padding: "20px" }} >

      <SubjectContext.Provider value={subject}>
        <select onChange={(e)=>setSubject(e.target.value)} value={subject}>
          <option>Select Subject</option>
          <option>react</option>
          <option>javascript</option>
          <option>python</option>

        </select>
        <button onClick={()=>setSubject('')}>Clear Subject</button>
        <h1>Context API</h1>
        <College />
      </SubjectContext.Provider>


    </div>
  )
}

export default App
