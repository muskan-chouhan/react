import { NavLink, Route, Routes } from "react-router"
import UserList from "./UserList"
import UserAdd from "./UserAdd"
import UserEdit from "./UserEdit"
function App() {

  return (
    <>
    {/* <h2>Make Routes  and Pages for add users and user list UI</h2> */}
    <ul className="nav-list">
      <li>
        <NavLink to='/'>List</NavLink>
      </li>
            <li>
        <NavLink to='/add'>Add User</NavLink>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/add" element={<UserAdd/>}/>
      <Route path="/edit/:id" element={<UserEdit/>}/>
    </Routes>
    
    </>
  )
}

export default App
