import { Route, Routes } from "react-router"
import UserList from "./UserList"
import UserAdd from "./UserAdd"
function App() {

  return (
    <>
    {/* <h2>Make Routes  and Pages for add users and user list UI</h2> */}

    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/adduser" element={<UserAdd/>}/>
    </Routes>
    
    </>
  )
}

export default App
