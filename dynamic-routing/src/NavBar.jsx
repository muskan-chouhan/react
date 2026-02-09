import { Link, NavLink } from "react-router"
import './header.css'
export default function NavBar() {
    return (<div className="header">
        <div>
            <NavLink className="link"  to='/'><h2>logo</h2></NavLink>
        </div>
        <div>
            <ul>
                <li>          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link custom-active" : "link"
            }
          >
            Home
          </NavLink></li>
                <li><NavLink className="link" to= '/about'>About</NavLink></li>
                <li><NavLink className="link" to= '/login'>login</NavLink></li>
                <li><NavLink className="link" to= '/users'>Users</NavLink></li>
                <li><NavLink className="link" to= '/users/list'>List</NavLink></li>
            </ul>
        </div>
    </div>

    )
}