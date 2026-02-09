import { Link, NavLink } from "react-router"
import './header.css'
export default function NavBar() {
    return (<div className="header">
        <div>
            <Link className="link"  to='/'><h2>logo</h2></Link>
        </div>
        <div>
            <ul>
                <li><NavLink className="link" to= '/'>Home</NavLink></li>
                <li><Link className="link" to= '/about'>About</Link></li>
                <li><Link className="link" to= '/login'>login</Link></li>
                <li><Link className="link" to= '/users'>Users</Link></li>
                <li><Link className="link" to= '/users/list'>List</Link></li>
            </ul>
        </div>
    </div>

    )
}